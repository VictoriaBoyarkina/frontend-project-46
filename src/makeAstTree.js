/* eslint-disable max-len */
import _ from 'lodash';

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  return uniqArray.sort();
};

const makeAstTree = (object1, object2) => {
  const listOfKeys = getListOfKeys(object1, object2);
  const result = listOfKeys.map((key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (_.isObject(object1[key]) && _.isObject(object2[key])) {
        return { key, type: 'nested', children: makeAstTree(object1[key], object2[key]) };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        return { key, type: 'unchanged', value: object1[key] };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] !== object2[key]) {
        return {
          key, type: 'changed', value1: object1[key], valu2: object2[key],
        };
      }
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, type: 'deleted', value: object1[key] };
    }
    if (!_.has(object1, key) && _.has(object2, key)) {
      return { key, type: 'added', value: object2[key] };
    }
  });
  return result;
};

export default makeAstTree;
