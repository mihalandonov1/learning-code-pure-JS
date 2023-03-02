'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = 199 * numPassengers;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

// ---------------------------------------

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2343525,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2343242525) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = 2343242525;
};

newPassport(jonas);
checkIn(flight, jonas);
*/

// --------------------------------------------
/*

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// High order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javaScript is the best', upperFirstWord);

transformer('javaScript is the best', oneWord);
*/

//-----------------------------------------------

/*

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

*/

//-----------------------------------------------

// CALL method, APPLY method

/*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'mihal andonov');
lufthansa.book(635, 'ivan petrov');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Ivan petrov'); -> not work

// CALL method

book.call(eurowings, 23, 'ivan petrov');
console.log(eurowings);

book.call(lufthansa, 32, 'darina dineva');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 43, 'petar petrov');
//console.log(swiss);

//Apply method

const flightData = [585, 'Ivan Ivanov'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

//-----------------------------------------------

// BIND method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Dancho Peev');

//partion application - part of the arguments are allready set like the next example ... the argument for the flight - 23 is passed we need to pass only the name of the passenger

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ivan Petrov');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.2, 100));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(123));

const newTax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const addVAT2 = newTax(0.23);

addVAT2(155);

*/

// --------------------------------------------
/*
//Immediately invoked function expression IIFE

(function () {
  console.log('this will never run again');
})();

// arrow function IIFE

(() => console.log('never called back again'))();

{
  const isPrivate = 23; //defined only in the block
  var notPrivate = 46; //defined and outsite the block
}

console.log(isPrivate); // not defined
console.log(notPrivate); // 46
*/
// -------------------------------------------

// CLOSURES
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

// example 1
/*
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assigning
h();
f();

console.dir(f);
*/

// example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 gropus, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // closures has priority over the scope chain.
boardPassengers(180, 3);
