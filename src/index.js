import getParsedData from './parser.js';
import formatters from './formatters/index.js';
import buildTree from './buildTree.js';

export default (path1, path2, formatName = 'stylish') => {
  const dataFile1 = getParsedData(path1);
  const dataFile2 = getParsedData(path2);
  const diff = buildTree(dataFile1, dataFile2);
  return formatters(diff, formatName);
};
