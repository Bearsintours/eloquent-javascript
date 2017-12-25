//// Data Structures: Objects and Arrays (Chapter 4) ////

// The sum of a range //

function range(start, end, step) {
  var array = [];

  if (arguments.length > 2) {
    if (step > 0) {
      for (var j = start; j <= end; j += step) {
        array.push(j);
      }
    } else {
      for (var j = start; j >= end; j += step) {
        array.push(j);
      }
    }
    return array;
  } else {
    for (var i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
}


function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  })
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Reversing an array //

function reverseArray(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var val = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = val;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// A list //

function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var list;
    list = list == undefined ? null : list;
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(el, list) {
  return obj = {
    value: el,
    rest: list
  };
}

function nth(list, num) {
  var count = 0;
  for (var node = list; node; node = node.rest) {
    if (count == num) {
      return node.value;
    } else count++;
  }
  return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Deep comparison //

function deepEqual(obj1, obj2) {

  if (typeof obj1 != "object" || typeof obj2 != "object") {
    return obj1 === obj2;
  } else {
    var props1 = 0;
    var props2 = 0;
    for (prop in obj1) {
      props1++;
    }
    for (prop in obj2) {
      props2++;
      if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return props1 == props2;
  }
}

var obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));
// → false
console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
// → true
