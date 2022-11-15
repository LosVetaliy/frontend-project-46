import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const result = [];

  const getParsedData = (path) => JSON.parse(readFileSync(path, 'utf-8'));
  const data1 = getParsedData(path1);
  const data2 = getParsedData(path2);

  const getKeys = (data) => Object.keys(data);
  _.union(getKeys(data1), getKeys(data2))
    .sort()
    .forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(data1, key)) {
        result.push(`+ ${key}: ${data2[key]}`);
      } else if (!Object.prototype.hasOwnProperty.call(data2, key)) {
        result.push(`- ${key}: ${data1[key]}`);
      } else if (data1[key] !== data2[key]) {
        result.push(`- ${key}: ${data1[key]}`);
        result.push(`+ ${key}: ${data2[key]}`);
      } else {
        result.push(`  ${key}: ${data1[key]}`);
      }
    });

  return `{\n${result.join('\n')}\n}`;
};
export default genDiff;
