import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff', () => {
  const patch1 = getFixturePath('file1.json');
  const patch2 = getFixturePath('file2.json');
  const patch3 = getFixturePath('file3.yaml');
  const patch4 = getFixturePath('file4.yaml');
  const patch5 = getFixturePath('file5.yml');
  const patch6 = getFixturePath('file6.yml');

  const result1 = fs.readFileSync(getFixturePath('stylish.txt'), 'utf8');
  const result2 = fs.readFileSync(getFixturePath('plain.txt'), 'utf8');

  expect(genDiff(patch1, patch2)).toEqual(result1);
  expect(genDiff(patch3, patch4)).toEqual(result1);
  expect(genDiff(patch5, patch6)).toEqual(result1);
  expect(genDiff(patch1, patch4)).toEqual(result1);
  expect(genDiff(patch1, patch6)).toEqual(result1);
  expect(genDiff(patch3, patch6)).toEqual(result1);

  expect(genDiff(patch1, patch2, 'plain')).toEqual(result2);
  expect(genDiff(patch3, patch4, 'plain')).toEqual(result2);
  expect(genDiff(patch5, patch6, 'plain')).toEqual(result2);
  expect(genDiff(patch1, patch4, 'plain')).toEqual(result2);
  expect(genDiff(patch1, patch6, 'plain')).toEqual(result2);
  expect(genDiff(patch3, patch6, 'plain')).toEqual(result2);
});
