import _ from 'lodash';

const makePath = (key, path) => (path === '' ? key : `${path}.${key}`);

const stringifyValue = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const getPlainFormat = (node, parentPath = '') => {
  const { type } = node;
  const { key } = node;
  const path = makePath(key, parentPath);

  switch (type) {
    case 'nested':
      return node.children
        .flatMap((child) => getPlainFormat(child, path))
        .filter(((child) => child !== null))
        .join('\n');
    case 'updated':
      return `Property '${path}' was ${type}. From ${stringifyValue(
        node.value1,
      )} to ${stringifyValue(node.value2)}`;
    case 'added':
      return `Property '${path}' was ${type} with value: ${stringifyValue(
        node.value,
      )}`;
    case 'removed':
      return `Property '${path}' was ${type}`;
    default:
      return null;
  }
};

export default (diff) => `${diff.map((node) => getPlainFormat(node)).join('\n').trim()}`;
