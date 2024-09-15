function flattenArray(nestedArray) {
  var ret = []
  nestedArray.forEach((item) => {
    if (Array.isArray(item)) {
      ret = ret.concat(flattenArray(item));
    } else {
      ret.push(item);
    }
  })
  return ret;
}


function groupBy(arr, property) {
  var groups = []
  var ret = {};

  arr.forEach((item) => {
      if (!groups.includes(item[property])) {
          groups.push(item[property])
          ret[item[property]] = [item];
      } else {
         ret[item[property]].push(item);
      }
  })
  return ret;
}


function memoize(fn) {
  const cache = {};
  
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}


function sumNestedValues(obj) {

}


function paginateArray(arr, pageSize, pageNumber) {

}


class EventEmitter {

}


function firstNonRepeatingChar(str) {

}


// Autotester
module.exports = {
    flattenArray,
    groupBy,
    memoize,
    sumNestedValues,
    paginateArray,
    EventEmitter,
    firstNonRepeatingChar,
  };