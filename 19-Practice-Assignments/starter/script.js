/*
// Practice assignment Variable name and Data type
const country = 'Uzbekistan';
const country2 = 'Finland'
const continent = 'Central Asia';
let population = 33700000;
let averagePopulation = 33000000;
let finlandPopulation = 6000000;
const isIsland = false; 
const language = 'Uzbek';
console.log(country + " " + "is in " + continent + ", and its " + population + " " + "people speak"+ " " + language);
const description = `${country} is in ${continent}, and its ${population} people speak ${language} `;

// if else practice assignment
if(population >= averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is below average`);
}

if(finlandPopulation > averagePopulation) {
    console.log(`${country2}'s population is above average`);
} else {
    const avarage = averagePopulation - finlandPopulation;
    console.log(`${country2}'s population is ${avarage} million below average`);
}
console.log(description);
console.log(population * 2);
console.log(population / 2);
console.log(population < averagePopulation);
console.log(population > finlandPopulation);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
*/
// Coding Challenge #1
let markHeight = 1.69;
let markWeight = 78;

let bmiMark = markWeight / (markHeight ** 2);
console.log("Mark BMI is:", bmiMark);

let johnHeight = 1.95;
let johnWeight = 92;

let bmiJohn = johnWeight / (johnHeight ** 2);
console.log("John BMI is:", bmiJohn);

let markHigherBMI = bmiJohn < bmiMark;  
console.log(markHigherBMI);

let bmi2 = markWeight / (markHeight * markHeight);
console.log("Mark BMI is:", bmi2);

let bmi3 = johnWeight / (johnHeight * johnHeight);
console.log("John BMI is:", bmi3);

// Coding Challenge #2
if(bmiMark > bmiJohn){
   console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`) 
} else {
   console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`)
}