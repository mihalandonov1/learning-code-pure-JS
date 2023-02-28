'use strict';

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // functions

// console.log(addDec1(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
//console.log(addArrow(2, 3));

// function addDec1(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// const jonas = {
//   name: 'Jonas',
//   year: 1991,
//   clalcAge: function () {
//     return 2037 - this.year;
//   },
// };
// jonas.clalcAge();
// console.log(jonas.clalcAge());

//----------- the THIS keyword in action --------

//console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   //console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// --------- regular functions vs. arrow functions -------

/*

//var firstName = 'matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  clalcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
        const self = this; // self or that

        const isMillenium = function () {
          console.log(self);
          console.log(self.year >= 1981 && self.year <= 1996);
          // console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenium();
      },

    // solution 2

    const isMillenium = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenium();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.clalcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

addExpr(2, 5);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

*/

// ----- primitive vs objects --------

/*

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

// ------ primiteve vs objects in practise -------
// primitive types

/*
let lastName = 'Wiliams';
let oldsLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldsLastName);
// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

//marriedJessica = {}; - not allowed becouse its constant

*/

// copying objects
/*
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
