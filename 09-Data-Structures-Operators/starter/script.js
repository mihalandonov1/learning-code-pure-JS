'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const arr = [text];
  const newArr = arr[0].toLowerCase().split(' ');
  const spltArr = newArr[0].replaceAll('\n', ' ');
  const splitedArr = spltArr.split(' ');
  for (let i = 0; i < splitedArr.length; i++) {
    const a = splitedArr[i].slice(0, splitedArr[i].lastIndexOf('_'));
    const b = splitedArr[i].slice(
      splitedArr[i].lastIndexOf('_') + 1,
      splitedArr[i].length
    );
    const restWord = b.slice(1, b.length);
    const capLetter = b[0].toUpperCase();

    const firstWord = a;
    const secondWord = capLetter + restWord;

    const updatedData = firstWord.concat(secondWord);

    const updateWithDonut = updatedData.padEnd(20);
    console.log(`${updateWithDonut}${'🍩'.repeat(i + 1)}`);
  }
});

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/
//------------START-----------------
//
//
//
// ----------- END --------------
/*

// LOOPING OBJECTS

//Property NAMES

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire object

const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
//---------END------------------

//------------------------------
// OPTION CHAINING

/*


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Exmaple

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// MEthods

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// ARRAYS

const users = [{ name: 'jonas', email: 'hello@dasd.com' }];
const user = [];

console.log(users[0]?.name ?? 'user array empty');
console.log(user[0]?.name ?? 'user array empty');

// =

if (users.length > 0) console.log(users[0].name);
else console.log('users array empty');

*/

//-------------------------------

//The FOR-of LOOP
/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

*/

// -------------------------

/*
// Nullish: null and undefined (NOT 0 or '')

restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

*/

// ------------------------

// Short circuaiting AND and OR operators

// AND and OR operators

/*

// ------- OR --------



//Use ANY data type, return ANY data type, short-circuiting

console.log(3 || 'jonas');
console.log('' || 'jonas'); // jonas becouse '' is falsy value
console.log(true || 0); // -> true because true is truthy value
console.log(undefined || null); // -> null undefined is falsy value even null is falsy it return becaouse the first value is falsy

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 1;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 'there are no guests';
console.log(guest2);

// -------- AND ------------

console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

// ---------------------------

/*

// 1) DESTRUCTURING

// SPREAD, because on RIGHT side of the equal sign =

const arr = [1, 2, ...[3, 4]];

//REST, becaouse on LEFT side of the equal sign =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
w
console.log(pizza, risotto, otherFood);

// OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, but NOT objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);
console.log('j', 'o');

// REal World exapmles

// const ingredients = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// // ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


*/

// OBJECTS

/*

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guizeppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante de Mihal';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*
restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sol 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: 'Via del Sol 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//default values

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
