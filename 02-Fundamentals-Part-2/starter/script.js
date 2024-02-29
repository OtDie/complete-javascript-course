"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

/* 
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


//Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1995, "Otto"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired !`);
    return -1;
  }
};
yearsUntilRetirement(1991, "Jonas");
yearsUntilRetirement(2010, "Mike");
yearsUntilRetirement(1950, "Sam");

const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `The winner is team Dolphins with an average of ${avgDolphins} points to ${avgKoalas} for team Koalas`
      );
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(
        `The winner is team Koalas with an average of ${avgKoalas} points to ${avgDolphins} for team Dolphins`
        );
      } else {
        console.log(`No team wins because the conditions for a win were not met`);
      }
    };
    

    checkWinner(scoreDolphins, scoreKoalas);
    
    //Arrays
    
    const friends = ["Micheal", "Steven", "Peter"];
    const years = new Array(1991, 1984, 2008, 2020);
    console.log(friends);
    
    console.log(friends[0]);
    console.log(friends[2]);
    
    console.log(friends.length);
    console.log(friends[friends.length - 1]);
    
    friends[2] = "Jay";
    console.log(friends);
    const firstName = "Otto";
    const otto = [firstName, "Diekgerdes", 2037 - 1991, "teacher", friends];
    
    
    const calcAge = function (birthYear) {
      return 2037 - birthYear;
    };
    
    const years = [1990, 1967, 2002, 2010, 2018];
    
    const age1 = calcAge(years[0]);
    const age2 = calcAge(years[1]);
    const age3 = calcAge(years[years.length - 1]);
    
    console.log(age1, age2, age3);
    
    const ages = [
      calcAge(years[0]),
      calcAge(years[1]),
      calcAge(years[years.length - 1]),
    ];
    console.log(ages);
    
    const friends = ["Micheal", "Steven", "Peter"];
    
    //Add Elements
    const newLength = friends.push("Jay");
    console.log(friends);
    console.log(newLength);
    
    friends.unshift("John");
    console.log(friends);
    
    //Remove Elements
    friends.pop(); // Last
    const popped = friends.pop();
    console.log(friends);
    console.log(popped);
    
    friends.shift(); // First
    console.log(friends);
    
    console.log(friends.indexOf("Steven"));
    console.log(friends.indexOf("Bob"));
    
    console.log(friends.includes("Steven"));
    console.log(friends.includes("Bob"));
    
    
    const calcTip = function (bill) {
      return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    };
    
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    
    console.log(bills, tips, total);
    
    //Objects
    const jonasArray = [
      "Jonas",
      "Schmedtmann",
      2037 - 1991,
      "teacher",
      ["Micheal", "Peter", "Steven"],
    ];
    
    const jonasObject = {
      firstName: "Otto",
      lastName: "Diekgerdes",
      age: 2037 - 1991,
      job: "graphic designer",
      friends: ["Micheal", "Peter", "Steven"],
    };
    
    
    const jonas = {
      firstName: "Otto",
      lastName: "Diekgerdes",
      age: 2037 - 1991,
      job: "graphic designer",
      friends: ["Micheal", "Peter", "Steven"],
    };
    
    console.log(jonas.lastName);
    console.log(jonas["lastName"]);
    
    const nameKey = "Name";
    console.log(jonas["first" + nameKey]);
    console.log(jonas["last" + nameKey]);
    
    const interestedIn = prompt(
      "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
      );
      
      if (jonas[interestedIn]) {
        console.log(jonas[interestedIn]);
      } else {
        console.log(`Unfortunatly we don't know that about Jonas`);
      }
      
      //add values to object:
      jonas.location = "Portugal";
      jonas["twitter"] = "@jonasschmedtman";
      console.log(jonas);
      */
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
);
