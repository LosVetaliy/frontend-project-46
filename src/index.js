import path from 'path';
import { readFileSync } from 'fs';
import parse from './parser.js';
import renderDiff from './formatters/index.js';
import buildTree from './buildTree.js';

const getData = (pathFile) => readFileSync(pathFile, 'utf-8');
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);

const genDiff = (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = parse(getData(pathFile1), getTypeFile(pathFile1));
  const dataFile2 = parse(getData(pathFile2), getTypeFile(pathFile2));
  const diff = buildTree(dataFile1, dataFile2);
  return renderDiff(diff, formatName);
};
export default genDiff;
