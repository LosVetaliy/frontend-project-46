import _ from 'lodash';
import getParsedData from './parser.js';
import formatters from './formatters/index.js';

export default (path1, path2, formatName = 'stylish') => {
  const data1 = getParsedData(path1);
  const data2 = getParsedData(path2);

  const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2);

    return keys.reduce((acc, key) => {
      if (!Object.hasOwn(data1, key)) {
        acc[key] = { difference: 'added', value: data2[key] };
      } else if (!Object.hasOwn(data2, key)) {
        acc[key] = { difference: 'deleted', value: data1[key] };
      } else if (data1[key] !== data2[key] && _.isObject(data1[key]) && _.isObject(data2[key])) {
        acc[key] = { difference: 'changed with children', value: genDiff(data1[key], data2[key]) };
      } else if (data1[key] !== data2[key]) {
        acc[key] = { difference: 'changed', value1: data1[key], value2: data2[key] };
      } else {
        acc[key] = { difference: 'unchanged', value: data1[key] };
      }
      return acc;
    }, {});
  };
  return formatters(genDiff(data1, data2), formatName);
};
