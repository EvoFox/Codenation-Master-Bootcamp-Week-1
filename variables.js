// // // 1.3 Master Variables

// console.log("8th Character of the string \"All Around The World\": "+"All Around The World".charAt(7).toUpperCase());

// let li = 10;
// const ci = 10;

// console.log("Before Change: ");
// console.log("let: " + li);
// console.log("const: " + ci);

// li *= 2;
// try {
//     ci = 20;
// }
// catch (err) {
//     console.log("Attempting to change the constant results in this error; " + err);
// }

// console.log("After Change: ");
// console.log("let: " + li);
// console.log("const: " + ci);

// // Operators
// // +  Add
// // -  Subtract
// // *  Multiply
// // ** Power
// // /  Divide
// // %  Modulo (Divide, return remainder)
// // ++ Increment
// // -- Negative Increment

// // Assignment Operators
// // =  Assign
// // *=
// // /=
// // -=

// // The course recommends camelCase for typesetting, however I have taught myself to use exclusively snake_case, I personally feel that the most important aspect of naming conventions is to be consistent
// // Therefore I shall be using snake_case in order to maintain consistency in my code.
// let first_name = "Josh";
// let age = 25;
// let favourite_drink = "coffee";
// // console.log("My favourite drink is " + favourite_drink + ".");
// console.log(`My name is ${first_name}, I am ${age} and my favourite drink is ${favourite_drink}.`)

// first_name = "Evo";
// favourite_drink = "Dr. Pepper";
// console.log(`My name is ${first_name}, I am ${age} and my favourite drink is ${favourite_drink}.`);


// // Activity 1:
// // Create a program that stores someones name, age and favourite colour and log it to the console in a complete sentence.
// let act1_first_name = "Evo";
// let act1_age = 25;
// let act1_favourite_colour = "Teal";


// console.log(`My name is ${act1_first_name}, I am ${act1_age} and my favourite colour is ${act1_favourite_colour}`);


// // Stretch goal:
// // Update all of the variables and write out a new sentence underneath the original
// act1_first_name = "Zach";
// act1_age = 27;
// act1_favourite_colour = "Purple";

// console.log(`My name is ${act1_first_name}, I am ${act1_age} and my favourite colour is ${act1_favourite_colour}`);

// // Activity 2:
// // Create a program that stores what you eat for breakfast, lunch and dinner, log these to the console.
// let act2_breakfast = "cereal";
// let act2_lunch = "toast";
// let act2_dinner = "chicken curry";

// console.log(`Today I ate ${act2_breakfast} for breakfast, ${act2_lunch} for lunch and ${act2_dinner} for dinner`)

// // Stretch goal:
// // Update each of these variables to what you will eat tomorrow and log these to the console.
// act2_breakfast = "toast";
// act2_lunch = "a ham sandwich";
// act2_dinner = "a stir fry";


// console.log(`Today I ate ${act2_breakfast} for breakfast, ${act2_lunch} for lunch and ${act2_dinner} for dinner`)

// // Activity 3:
// // Create a program that calculates the number of days from today to your birthday
// const birthday = new Date('9-10-2022');
// const today = Date.now();

// const diff_time = Math.abs(birthday - today);
// const diff_days = Math.ceil(diff_time / (1000 * 60 * 60 * 24));

// console.log(`It is ${diff_days} days until my birthday`);
// // Activity 4:
// // Create 9 variables space_1, space_2, etc.
// // Assign these variables with either 'x', 'o' or ' '
// // Insert these variables using ${variable} and make it look like a tic tac toe board

// let space_1 = 'X';
// let space_2 = 'X';
// let space_3 = ' ';

// let space_4 = 'X';
// let space_5 = 'X';
// let space_6 = ' ';

// let space_7 = 'O';
// let space_8 = ' ';
// let space_9 = ' ';

// console.log("   |   |   ");
// console.log(` ${space_1} | ${space_2} | ${space_3} `);
// console.log("   |   |   ");

// console.log("---+---+---");

// console.log("   |   |   ");
// console.log(` ${space_4} | ${space_5} | ${space_6} `);
// console.log("   |   |   ");

// console.log("---+---+---");

// console.log("   |   |   ");
// console.log(` ${space_7} | ${space_8} | ${space_9} `);
// console.log("   |   |   ");


