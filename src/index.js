import _ from 'lodash';
import getParsedData from './parser.js';
import formatters from './formatters/index.js';

export default (path1, path2, formatName = 'stylish') => {
  const dataFile1 = getParsedData(path1);
  const dataFile2 = getParsedData(path2);

  const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2);

    const keysDiff = keys.map((key) => {
      if (!Object.hasOwn(data1, key)) {
        return [key, { difference: 'added', value: data2[key] }];
      } if (!Object.hasOwn(data2, key)) {
        return [key, { difference: 'deleted', value: data1[key] }];
      } if (data1[key] !== data2[key] && _.isObject(data1[key]) && _.isObject(data2[key])) {
        return [key, { difference: 'changed with children', value: genDiff(data1[key], data2[key]) }];
      } if (data1[key] !== data2[key]) {
        return [key, { difference: 'changed', value1: data1[key], value2: data2[key] }];
      }
      return [key, { difference: 'unchanged', value: data1[key] }];
    });
    return _.fromPairs(keysDiff);
  };
  return formatters(genDiff(dataFile1, dataFile2), formatName);
};
