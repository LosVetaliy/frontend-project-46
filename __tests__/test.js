import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extensions = [
  ['json', 'json', undefined, 'stylish.txt'], ['yaml', 'yml', undefined, 'stylish.txt'], ['json', 'yaml', undefined, 'stylish.txt'],
  ['json', 'json', 'stylish', 'stylish.txt'], ['yaml', 'yml', 'stylish', 'stylish.txt'], ['json', 'yaml', 'stylish', 'stylish.txt'],
  ['json', 'json', 'plain', 'plain.txt'], ['yaml', 'yml', 'plain', 'plain.txt'], ['json', 'yaml', 'plain', 'plain.txt'],
  ['json', 'json', 'json', 'jsonRes.json'], ['yaml', 'yml', 'json', 'jsonRes.json'], ['json', 'yaml', 'json', 'jsonRes.json'],
  ['json', 'json', 'mistake', 'mistake.txt'],
];

test.each(extensions)('file extensions and format(%s, %s, %s)', (file1Extension, file2Extension, format, resultFile) => {
  const firstFile = getFixturePath(`file1.${file1Extension}`);
  const secondFile = getFixturePath(`file2.${file2Extension}`);
  const result = fs.readFileSync(getFixturePath(resultFile), 'utf8');

  expect(genDiff(firstFile, secondFile, format)).toEqual(result);
});
