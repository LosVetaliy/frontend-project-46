import _ from 'lodash';
import path from 'path';
import fs from 'fs';
//__fixtures__/file1.json

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');
const getObject = (filePath) => JSON.parse(readFile(filePath));

const genDiff = (filePath1, filePath2) => {
  const object1 = getObject(filePath1);
  const object2 = getObject(filePath2);
  return getDiff(getDiffInfo(object1, object2));
};
export default genDiff;