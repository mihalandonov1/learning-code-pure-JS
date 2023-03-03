"use strict";

// --------------------------
/*

let arr = ["a", "b", "c", "d", "e"];

// SLICE dont change the original array

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// SPLICE mutate original array

//console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

arr.splice(1, 2);

console.log(arr);

// REVERSE - mutate the original array

arr = ["a", "b", "c", "d", "e"];

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(" - "));
*/
// ----------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
  }
}

console.log("--------- FOR EACH -------------");

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} : You withdraw ${Math.abs(movement)}`);
  }
});

*/
// ------------------------------------------------
//FOR EACH on MAPS and SETS

//MAP
/*
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// SET

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);

// -----------------------

// REDUCE

console.log(movements);

const balance = movements.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(balance);

// maximum value

const max = movements.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);

console.log(max);

// chaining methods

// PIPELINE

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

//--------------------------------

// find method

const firstWithdraw = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdraw);

console.log(accounts);

const acc = accounts.find((acc) => acc.owner === "Jessica Davis");

console.log(acc);

console.log(movements);

// check for EQUALITY
console.log(movements.includes(-130));

// check for SOME: CONDITION if 1 element = condition = true
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

//EVERY only get true if every condition equals the condition

console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// SEPARATE CALLBACK

const deposit = (mov) => mov > 0;

console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [-400, -650, -130]
*/
//-------------------------

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
const allMovements = accountMovements.flat();

console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

// FLAT
const overalBalance1 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance1);

// FLAT MAP
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//-------------------------------
// SORTING ARRAYS
// mutates original array

//Strings

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

//return < 0, A, B
//return > 0, B, A
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);
