function flattenArray(nestedArray) {
  var ret = []

  nestedArray.forEach((item) => {
    if (Array.isArray(item)) {
      ret = ret.concat(flattenArray(item));
    } else {  // flatten current item's arary(s)
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
        // add new property to map
        groups.push(item[property])
        ret[item[property]] = [item];
      } else {
        // add item to property
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
  var total = 0;
  
  Object.entries(obj).forEach(([key, value]) => {
      if (typeof(value) === "number") {
          total += value;
      } else {  // recurse
          total = total + sumNestedValues(value);
      }
  })
  return total;
}


function paginateArray(arr, pageSize, pageNumber) {
  var start = (pageNumber - 1) * pageSize;
  if (start >= arr.length || pageNumber < 1) {  // out of bounds
      return [];
  } else {
      // slice array for desired pages
      return arr.slice(start, start + pageSize);
  }
}


class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, handler) {
    // create event
    if (!this.events[event]) {
      this.events[event] = [];
    }
    // add handler to event
    this.events[event].push(handler);
  }

  emit(event, data) {
    if (this.events[event]) {
      // complete each handler function given the data and event
      this.events[event].forEach(handler => handler(data));
    }
  }
}


function firstNonRepeatingChar(str) {
  if (str.length == 0) return null;
  const counts = {};
  
  // Count each char
  for (var i=0; i < str.length; i++) {
      var char = str[i];
      counts[char] = (counts[char] || 0) + 1;  // If count[char] = undefined, set 0.
  }
  
  // Iter thru map
  for (var i=0; i < str.length; i++) {
      if (counts[str[i]] == 1) {
          return str[i];
      }
  }
  return null;
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