////    Higher-Order Functions (chapter 5) exercices: ////


// 1- Flattening //

var arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];
var concat = arrays.reduce(function(a, b) {
  return a.concat(b);
})

console.log(concat);
// → [1, 2, 3, 4, 5, 6]


// 2- Mother - child age difference //

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(ancestry) {
  return ancestry.filter(function(person) {
    return byName[person.mother] !== undefined;
  })
}

var motherKnown = hasKnownMother(ancestry);

function getMotherAge(person) {
  var mother = byName[person.mother];
  return person.born - mother.born;
}

console.log(average(motherKnown.map(getMotherAge)));
// → 31.2


// 3- Historical life expectancy //

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

var lifeExp = {};

function getCentury(person) {
  return Math.ceil(person.died / 100);
}

for (var i = 0; i < ancestry.length; i++) {
  var century = getCentury(ancestry[i]);
  var death = ancestry[i].died - ancestry[i].born;
  if (lifeExp.hasOwnProperty(century)) {
    lifeExp[century].push(death);
  } else {
    lifeExp[century] = [];
    lifeExp[century].push(death);
  }
}

for (var prop in lifeExp) {
  lifeExp[prop] = average(lifeExp[prop]);
}

console.log(lifeExp);
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


// 4- Every and then some //

function some(arr, f) {
  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      return true;
    }
  }
  return false;
}

function every(arr, f) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      count++;
    }
    if (count === arr.length) {
      return true;
    }
  }
  return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
