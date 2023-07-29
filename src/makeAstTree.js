import _ from 'lodash';

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  return uniqArray.sort();
};

const makeAstTree = (object1, object2, listOfKeys) => {
  const result = listOfKeys.map((key) => {
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return { key, status: 'nested', children: makeAstTree(object1[key], object2[key], getListOfKeys(object1[key], object2[key])) };
      // eslint-disable-next-line max-len
    } if (Object.prototype.hasOwnProperty.call(object1, key) && Object.prototype.hasOwnProperty.call(object1, key) && object1[key] === object2[key]) {
      return { key, value: object1[key], status: 'notChanged' };
    } if (!Object.prototype.hasOwnProperty.call(object2, key)) {
      return { key, value: object1[key], status: 'deleted' };
    } if (!Object.prototype.hasOwnProperty.call(object1, key)) {
      return { key, value: object2[key], status: 'added' };
    }
    return { key, value: [object1[key], object2[key]], status: 'changed' };
  });
  return result;
};

// eslint-disable-next-line no-unused-vars

export { makeAstTree, getListOfKeys };
