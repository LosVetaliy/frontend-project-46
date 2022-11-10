import _ from 'lodash';
import path from 'path';
import fs from 'fs'

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const getObject = (filePath) => JSON.parse(readFile(filePath));

const genDiff = (filePath1, filePath2) => {
    const object1 = getObject(filePath1);
    const object2 = getObject(filePath2);
    //return getDiff(getDiffInfo(object1, object2));
    console.log (object1, object2)
    return (object1, object2)
};
export default genDiff;