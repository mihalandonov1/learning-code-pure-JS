"use strict";

// --- CODING CHALLENGE ------ STRINGS -------
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:

§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

GOOD LUCK
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

function toCamelCase() {
  const lowerCase = document.toLowerCase();
}
toCamelCase();
// ----------- PART 3 -----------

/*

console.log("a+very+nice+string".split("+"));

console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toLocaleUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toLocaleUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas shcmedtamann");

// Padding a string --> padStart

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log("Jonas".padStart(25, "+"));

// Padding --> padEnd

console.log(message.padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4748235744824590));
console.log(maskCreditCard(4748232344824456));
console.log(maskCreditCard(4743242344822359));

// Repeat method

const message2 = "Bad weather... all departures Delayed...  ";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(3);
planesInLine(5);
planesInLine(6);


*/
//
//------------ PART 2 ------------

/*
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log("mihal".toUpperCase());

//Fix capitalization in name

const passenger = "jOnAS"; //Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Comparing email

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io  \n";

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();

console.log(normalEmail);
console.log(email === normalEmail);

// replacing

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));

console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.includes("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW AIRbus family");
}

// Practise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

*/
// -----------------------
//------- PART 1--------
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

// indexOf, lastIndexOf

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

// slice method

console.log(airline.slice(4)); // not change first string its substring return a new string

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log(`You got the middle seat`);
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));


*/
