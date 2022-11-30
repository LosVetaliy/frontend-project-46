import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

export default (diff, formatName) => {
  if (formatName === 'plain') {
    return plain(diff);
  } if (formatName === 'json') {
    return json(diff);
  } if (formatName === 'stylish') {
    return stylish(diff);
  } return `output format ${formatName} not found`;
};
