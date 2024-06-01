// lecture 1:
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.

let country = "Brazil";
let continent = "America";
let population = 210;

console.log(country);
console.log(continent);
console.log(population);

// end of lecture 1.

// lecture 2:
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);

// end of lecture 2

// lecture 3
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.

language = "Portuguese";
console.log(
  "Country, continent and language should be const, those variables will never change. Populatuin should stay as a let, it changes with time."
);
console.log(
  "The variables turned into const cannot be changed, consts are constants, it is not possible to assign it once it has a value."
);

// end of lecture 3

// lecture 4
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

console.log(
  "Each half of the territory would have a population of: " +
    population / 2 +
    "million citizens."
);

population++;

console.log(population);

console.log(population > 6);

console.log(population < 33);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);

// end of lecture 4

// lecture 5
// Recreate the description variable from the last assignment, this time using the template literal syntax.

const descriptionNew = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

// end of lecture 5

// lecture 6
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`You are old enough do drive!`);
} else {
  console.log(`You are not old enough to drive, wait ${19 - age} more years.`);
}
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

if (population > 33) {
  console.log(`${country}'s population is above the average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below the average.`
  );
}
// end of lecture 6

// lecture 7
// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.

// const numNeighbours = prompt(`How many neighbour countries does your country have?`);
// if(numNeighbours == 1)
//     {
//         console.log(`Only one border!`);
//     }
//     else if(numNeighbours > 1)
//         {
//             console.log(`More than one border`);
//         }
//         else
//         {
//             console.log(`No borders`);
//         }

// end of lecture 7

// lecture 8
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

if (language === `english` && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not match your criteria :(`);
}

// end of lecture 8

// lecture 9
// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.

switch (language) {
  case `chinese`:
    console.log(`MOST number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
    break;
}

// end of lecture 9

// lecture 10
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

console.log(
  `${country}'s population is ${
    population > 33 ? `above` : `below`
  } the average.`
);

// end of lecture 10

// lecture 11
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  const description = `\n${country} has ${population} million people and its capital is ${capitalCity}.`;
  return description;
}

const descBrazil = describeCountry(country, population, `Brasilia`);
const descJapan = describeCountry(`Japan`, 125, `Tokyo`);
const descDenmark = describeCountry(`Denmark`, 5, `Copenhagen`);

console.log(descBrazil, descJapan, descDenmark);

// end of lecture 11

// lecture 12
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
  const percentage = `${(population / 7900) * 100}%`;
  return percentage;
}

const percentChina = percentageOfWorld1(1300);
const percentBrazil = percentageOfWorld1(population);
const percentageJapan = percentageOfWorld1(125);

console.log(`${percentChina}\n${percentBrazil}\n${percentageJapan}`);

// end of lecture 12

// lecture 13
// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentChina2 = percentageOfWorld3(1300);
const percentBrazil2 = percentageOfWorld3(population);
const percentJapan2 = percentageOfWorld3(125);

console.log(`${percentChina2}\n${percentBrazil2}\n${percentJapan2}`);

// end of lecture 13

// lecture 14
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

const describePopulation = (country, population) =>
  `${country} has ${population} million people, wich is about ${percentageOfWorld1(
    population
  )} of the world's population`;

console.log(describePopulation(country, population));
console.log(describePopulation(`China`, 1300));
console.log(describePopulation(`Japan`, 125));

// end of lecture 14

// lecture 15
// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

const populations = [population, 1300, 125, 314];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// end of lecture 15

// lecture 16
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbourCountries = [`Norway`, `Denmark`, `Finland`];
const showNeighbours = function () {
  console.log(neighbourCountries);
};
showNeighbours();

neighbourCountries.push(`Utopia`);
showNeighbours();

neighbourCountries.pop();
showNeighbours();

const centralEuropeanCheck = function () {
  console.log(
    !neighbourCountries.includes(`Germany`)
      ? `Probabbly not a central european country :D`
      : `Probably a central european country ^^`
  );
};

centralEuropeanCheck();
neighbourCountries.unshift(`Germany`);
centralEuropeanCheck();
neighbourCountries.shift();

neighbourCountries[
  neighbourCountries.indexOf(`Norway`)
] = `Constitutional Monarchy of Norway`;
showNeighbours();

// end of lecture 16

// lecture 17
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: `Brazil`,
  capital: `Brasilia`,
  language: `Portuguese`,
  population: 210,
  neighbours: [
    `Uruguai`,
    `Argentina`,
    `Paraguai`,
    `Bolívia`,
    `Peru`,
    `Colômbia`,
    `Venezuela`,
    `Guiana`,
    `Suriname`,
  ],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    return this.neighbours.length >= 1 ? false : true;
  },
};

// end of lecture 17

// lecture 18
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(
  `${myCountry.country} has ${myCountry.population} million ${language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

// end of lecture 18

// lecture 19
// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

myCountry.describe();
console.log(myCountry.checkIsland());

// end of lecture 19

// lecture 20
// There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting!`);
}

// end of lecture 20

// lecture 21
// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

let percentage2 = [];

for (let i = 0; i < populations.length; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentage2);

// end of lecture 21

// lecture 22
// Store this array of arrays into a variable called listOfNeighbours:

// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let neighbour = 0; neighbour < listOfNeighbours[i].length; neighbour++) {
    console.log(`Neighbour: ${listOfNeighbours[i][neighbour]}`);
  }
}

// end of lecture 22

// lecture 23
// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// Reflect on what solution you like better for this task: the for loop or the while loop?

let percentage3 = [];
let i = 0;

while (percentage3.length < populations.length) {
  percentage3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentage2);
console.log(percentage3);

// end of lecture 23

//////////////////////////////////////// DATA STRUCTURES ////////////////////////////////////////
