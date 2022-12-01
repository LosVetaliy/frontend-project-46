import _ from 'lodash';

const plain = (diff) => {
  const helper = (value) => {
    if (_.isObject(value)) {
      return '[complex value]';
    }
    return _.isString(value) ? `'${value}'` : value;
  };
  const iter = (currentDiff, patch = '') => _.sortBy(Object
    .entries(currentDiff))
    .flatMap(([key, val]) => {
      if (val.difference === 'nested') {
        return iter(val.value, `${patch}${key}.`);
      }
      if (val.difference === 'added' && !_.isObject(val.value)) {
        return `Property '${patch}${key}' was added with value: ${helper(val.value)}`;
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
        return `Property '${patch}${key}' was updated. From ${helper(val.value1)} to [complex value]`;
      }
      if (val.difference === 'changed' && _.isObject(val.value1) && !_.isObject(val.value2)) {
        return `Property '${patch}${key}' was updated. From [complex value] to ${helper(val.value2)}`;
      }
      if (val.difference === 'changed') {
        return `Property '${patch}${key}' was updated. From ${helper(val.value1)} to ${helper(val.value2)}`;
      }
      return [];
    }).join('\n');
  return iter(diff);
};
export default plain;
