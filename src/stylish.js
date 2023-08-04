import _ from 'lodash';

import { getListOfKeys } from './main.js';

const makeStylish = (object1, object2, listOfKeys) => {
  const result = listOfKeys.map((key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key] && _.isObject(object1[key]) && _.isObject(object2[key])) {
        return { key, status: 'nested', children: makeStylish(object1[key], object2[key], getListOfKeys(object1[key], object2[key])) };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        return { key, status: 'notChanged', value: object1[key] };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] !== object2[key]) {
        return {
          key, status: 'changed', value1: object1[key], valu2: object2[key],
        };
      }
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, status: 'deleted', value: object1[key] };
    }
    if (!_.has(object1, key) && _.has(object2, key)) {
      return { key, status: 'added', value: object2[key] };
    }
  });
  return result;
};

export default makeStylish;
