import { readFileSync } from 'fs';
// import path from 'path';

const parse = (configPath) => JSON.parse(readFileSync(configPath, 'utf-8'));
export default parse;
