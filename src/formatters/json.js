import _ from 'lodash';

const stringify = (value) => {
  if (_.isString(value)) {
    return `"${value}"`;
  }
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const getKeys = keys.map(
    (key) => `"${key}":${stringify(value[key])}`,
  );
  return `{${getKeys.join(',')}}`;
};

const getJsonFormat = (node) => {
  const { type } = node;
  const { key } = node;
  switch (type) {
    case 'added':
    case 'removed':
    case 'unchanged':
      return `{"key":"${key}","value":${stringify(node.value)},"type":"${type}"}`;
    case 'updated':
      return `{"key":"${key}","valueBefore":${
        stringify(node.value1)},"valueAfter":${stringify(node.value2)},"type":"${type}"}`;
    case 'nested':
      return `{"key":"${key}","type":"${type}","children":[${node.children
        .map((val) => getJsonFormat(val))
        .join(',')}]}`;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

export default (diff) => `[${diff.map((value) => getJsonFormat(value)).join(',')}]`;
