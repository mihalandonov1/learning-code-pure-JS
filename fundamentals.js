// const firstName = 'Mihal';
// const job = 'developer';
// const birthYear = 1989;
// const year = 2024

// const mihal = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;

// console.log(mihal);

// const mihalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(mihalNew);

// console.log('String \n\
// multiple \n\
// lines');

// console.log(`string 
// multi 
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving lessons 😀");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

// const birthYear = 1989;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' years old')
// console.log('23' + '10' + 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; //11
// n = n - 1; // 11 - 1 = 10;
// console.log(n); // output = 10;

// 5 falsy values: 0, '', undefined, null, NaN ;

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0.1;
// if(money) {
//     console.log("Dont spend it all")
// } else {
//     console.log("You should get a job")
// }

// let height = 0;
// if(height){
//     console.log('YAY! Height is defined')
// } else {
//     console.log('Height is undefined')
// }

// const age = '18';
// if(age === 18) console.log('you just became adult (strict)')

// if (age == 18) console.log("you just became adult (loose)");

// const favourite = Number(prompt("What's your favourite number"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) // '23' == 23
// {
//     console.log("cool 23 is an amazing number");
// } else if(favourite === 7) {
//     console.log("7 is also a cool number")
// } else if(favourite === 9) {
//     console.log("9 is also a cool number")
// } 
// else {
//     console.log("Number is not 23 or 7")
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);



// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const day = 'thursday';

// switch(day) {
//     case 'monday': // day === 'monday';
//         console.log("plan my course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("prepare videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("write code examples");
//         break;
//     case 'friday': 
//         console.log("make videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("take a break");
//         break;
//         default:
//             console.log("not a valid day")
// }

// if(day === 'monday') {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if(day === 'tuesday') {
//     console.log("Prepare videos");
// } else if(day === 'wednesday' || day === 'thursday') {
//     console.log("write code examples");
// } else if(day === 'friday') {
//     console.log("record videos");
// } else if(day === 'saturday' || day === 'sunday') {
//     console.log("enjoy the weekend");
// } else {
//     console.log("not a valid day");
// }

 const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${drink}`);