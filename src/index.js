import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import _ from 'lodash';
import getDiffInf from './diffInfo.js';
import getFileObj from './parse.js';


const getFilePath = (filepath) => resolve(cwd(), filepath)
const readFile = (path) => readFileSync(getFilePath(path), 'utf-8')
//const getFileObj = (file) => JSON.parse(file)

const genDiff = (filepath1, filepath2) => {
  const file1 = getFileObj(readFile(getFilePath(filepath1)))
  const file2 = getFileObj(readFile(getFilePath(filepath2)))
  const diffInf = getDiffInf(file1, file2)
  //console.log (diffInf)

  const getDiff = diffInf.map((diff) => {
    const typeDiff = diff.type
    switch (typeDiff) {
      case 'onlyFirst':
        return `  - ${diff.key}: ${diff.value}`
      case 'equal':
        return `    ${diff.key}: ${diff.value}`
      case 'noEqual':
        return `  - ${diff.key}: ${diff.value1} \n  + ${diff.key}: ${diff.value2}`
      case 'onlySecond':
        return `  + ${diff.key}: ${diff.value}`
      default:
        return null
    }
  })
  return `{\n${getDiff.join('\n')}\n}`
}

export default genDiff;