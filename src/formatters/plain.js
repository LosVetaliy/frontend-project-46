import _ from 'lodash';

const valType = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (typeof value === 'boolean') {
    return value === true ? 'true' : 'false';
  }
  if (typeof value === 'number') {
    return `${value}`;
  }
  if (value === null) {
    return 'null';
  }
};

export default (diff) => {
  const iter = (currentDiff, patch = '') => Object
    .entries(currentDiff).sort()
    .flatMap(([key, val]) => {
      if (val.difference === 'changed with children') {
        return iter(val.value, `${patch}${key}.`);
      }
      if (val.difference === 'added' && !_.isObject(val.value)) {
        return `Property '${patch}${key}' was added with value: ${valType(val.value)}`;
      }
      if (val.difference === 'added' && _.isObject(val.value)) {
        return `Property '${patch}${key}' was added with value: [complex value]`;
      }
      if (val.difference === 'deleted') {
        return `Property '${patch}${key}' was removed`;
      }
      if (val.difference === 'changed' && _.isObject(val.value1) && _.isObject(val.value2)) {
        return `Property '${patch}${key}' was updated. From [complex value] to [complex value]`;
      }
      if (val.difference === 'changed' && !_.isObject(val.value1) && _.isObject(val.value2)) {
        return `Property '${patch}${key}' was updated. From ${valType(val.value1)} to [complex value]`;
      }
      if (val.difference === 'changed' && _.isObject(val.value1) && !_.isObject(val.value2)) {
        return `Property '${patch}${key}' was updated. From [complex value] to ${valType(val.value2)}`;
      }
      if (val.difference === 'changed') {
        return `Property '${patch}${key}' was updated. From ${valType(val.value1)} to ${valType(val.value2)}`;
      }
      return [];
    }).join('\n');
  return iter(diff);
};
