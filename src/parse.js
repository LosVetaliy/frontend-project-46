import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getParsedData = (configPath) => {
  const format = path.extname(configPath); // returns the extension of the path
  if (format === '.json') {
    return JSON.parse(readFileSync(configPath, 'utf-8'));
  }
  return yaml.load(readFileSync(configPath, 'utf8'));
};
export default getParsedData;
