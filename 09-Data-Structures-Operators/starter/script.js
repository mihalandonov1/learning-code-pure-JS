'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

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

// FOR of LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

*/

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
