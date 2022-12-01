import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

export default (diff, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    default:
      return `output format ${formatName} not found`;
  }
};
