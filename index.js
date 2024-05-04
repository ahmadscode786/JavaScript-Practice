// - Calculate your age based on the current year and your birth year.

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let birthYear = 2000;
let age = currentYear - birthYear;
console.log(age);

// - Write a program that calculates the area of a rectangle using length and width variables

let length = 32;
let width = 30;
let areaOfRec = length * width ;
console.log("area of a rectangle is : " + areaOfRec);

// - Write a program that calculates the area of a circle.

let radius = 23;
let Area = Math.PI * radius * radius ;
console.log("area of the circle is:" + Area);

// - Write a program that calculates the area of the cube.

function cudeSurfaceArea(sideLenght) {
    return 6 * sideLenght **2;
}
let  sideLenght = 5 ;
let area = cudeSurfaceArea(sideLenght);
console.log(area);

// - Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.

function fahrnToCalsius(fahrenheit){
    return (fahrenheit-32) * 5 / 9;
}
 let fahrenheit = 35;
 let calcicus = fahrnToCalsius(fahrenheit);
 console.log(calcicus);

// - Convert a given number of seconds into minutes and seconds using variables.

function convertSeconds(seconds) {
    let minuts = Math.floor(seconds /60) ;
    let remainingSeconds = seconds % 60 ;
    return [minuts , remainingSeconds];
}
let seconds = 500 ; 
let r = convertSeconds(seconds);
let totalMinuts = r[0];
let totalSeconds = r[1];
console.log("total Minuts:"+ totalMinuts, "remaining Seconds :"+totalSeconds);

// - Write a program that calculates the percentage.

function calculatePercentage(obtainNumber , totalNumber) {
    let percentage = (obtainNumber/totalNumber) * 100 ;
    return percentage;
}
let obtainNumber = 661;
let totalNumber = 1100;
let result1 = calculatePercentage(obtainNumber,totalNumber);
console.log(result1);

// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function calculateWeeks(days) {
    let weeks = Math.floor(days/7);
    let remainingdays = days % 7;
    return [weeks,remainingdays];
}
let days = 365;
let result2 = calculateWeeks(days);
let totalWeeks = result2[0];
let totalRemaingsDays = result2[1];
console.log("Total weeks:"+totalWeeks , "Remaing days:"+ totalRemaingsDays);

// Solve some of the Increment and Decrement Operators:

// - Q1:
let a1 = 2;
let b1 = ++a1 * 2; 
b1 = 6

// - Q2
let x1 = 5;
let y1 = x1-- + 2;
y1 = 7

// - Q3 
let x = 3;
let y = ++x + x++ + ++x;
 y = 14

// - Q4 
let m1 = 2;
let n1 = ++m1 * m1++ * --m1;
n1 = 27;

// - Q5
let a2 = 3;
let b2 = 5;
let results = ++a2 + b2-- - a2++ + --b2;
 results = 7

// - Q6
let m3 = 2;
let n3 = 4;
let p = m3++ + ++n3 - --m3 + n3--;  
// values of m, n, and p are 2, 4, and 10

// - Q7
let a = 5;
let b = 3;
let c = 2;
let d = 7;
 
let result3 = ++a * (b-- + c) / --d;
// value of result is 5 ;

// - Q8
let m = 2;
let n = 3;
let o = 4;
let result = m++ * (--n + m) / (o-- - n);
m= 3, o=3, n=2, result =5

