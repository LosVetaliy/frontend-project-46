import _ from 'lodash';

const stylish = (diff) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const replacer = ' ';
    const spacesCount = 4;
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize - 2);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = _.sortBy(Object.entries(currentValue))
      .map(([key, val]) => {
        if (val.difference === 'changed') {
          return `${currentIndent}- ${key}: ${iter(val.value1, depth + 1)}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 1)}`;
        }
        if (val.difference === 'unchanged') {
          return `${currentIndent}  ${key}: ${val.value}`;
        }
        if (val.difference === 'nested') {
          return `${currentIndent}  ${key}: ${iter(val.value, depth + 1)}`;
        }
        if (val.difference === 'added') {
          return `${currentIndent}+ ${key}: ${iter(val.value, depth + 1)}`;
        }
        if (val.difference === 'deleted') {
          return `${currentIndent}- ${key}: ${iter(val.value, depth + 1)}`;
        }
        if (_.isObject(val)) {
          return `${currentIndent}  ${key}: ${iter(val, depth + 1)}`;
        }
        return `${currentIndent}  ${key}: ${val}`;
      });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(diff, 1);
};
export default stylish;
