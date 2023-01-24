
const lo = require('lodash');

const items = [1 , [2 , [3 ,[4]]]];

const getItems = lo.flattenDeep(items);

console.log(getItems);