import { readFileSync } from 'fs';
import path from 'path';

export default (configPath) => {
  return JSON.parse(readFileSync(configPath, 'utf-8'));
};
