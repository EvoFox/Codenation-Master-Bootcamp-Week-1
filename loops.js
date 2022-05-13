let fav_drink = ["Coffee", "Dr. Pepper", "Fanta"];

fav_drink.forEach(item => console.log(item));

let multiples_of_two = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        multiples_of_two.push(i);
        console.log(i);
    }
}

console.log(`Bumbers between 0 and 20 divisible by two; ${multiples_of_two}`);

let age = 15;

while (age < 18) {
    console.log("Child");
    age++;
}
console.log("Adult");

// Activity 1:
// Create an array that lists your favourite films, up to
// 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array;
let films = ["Taken", "Shrek", "12 Angry Men", "Detective Pikachu", "How to train your Dragon"];

films.push("Kingsman");
films.push("Turning Red");

films.forEach(item => console.log(item))

// Activity 2:
// Generate 6 random numbers between
// 1-50 and log them to the console.
for (let i = 0; i < 6; i++) {
    console.log(Math.round(Math.random() * (50 - 1) + 1))
}

// Activity 3:
// If we can create a loop to put 0-9 on the screen, how
// can we count from 9-0? Create a program that does
// this.
for (let i = 9; i > -1; i--) {
    console.log(i)
}

// Activity 4:
// Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is
// Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
// we want Ghostbusters!
let act4_films = ["Taken", "Shrek", "12 Angry Men", "Detective Pikachu"];

for (let i = 0; i < act4_films.length; i++) {
    if (i == 2) {
        if (act4_films[i] == "Ghostbusters") {
            console.log("It's ghostbusters");
        } else {
            console.log("It's NOT ghostbusters");
        }
    }
}


// Activity 5:
// Generate a random number between 1 and 30
// six times.
// For each random number generated, check if
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible
// by 7 or not.

let rand_num = []
for (let i = 0; i < 6; i++) {
    rand_num.push(Math.round(Math.random() * (30 - 1) + 1));
    console.log(`${rand_num[i]} Added to Array`);
    if (rand_num[i] % 7 == 0) {
        console.log(`${rand_num[i]} Is Divisible By 7`);
    } else {
        console.log(rand_num[i]);
    }
}



// Activity 6:
// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower.
tom_followers = ["Zach", "Mike", "John", "Richard"];
john_followers = ["Zach", "Mike", "Tanya", "Edward"];
mutual_followers = [];
for (let i = 0; i < tom_followers.length; i++) {
    for (let index = 0; index < john_followers.length; index++) {
        if (tom_followers[i] === john_followers[index]) {
            mutual_followers.push(tom_followers[index]);
        }
    }
}
console.log(`Mutual followers: ${mutual_followers}`)


// Activity 7:
// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while var result = '';
// loop. Give an example of each.
// What are the pros and cons?)

// Here I have written three for loops that all have the same intention, with the same parameters

//Beginning of Do While Loop
let i = 0;
let result = '';

do {
    i += 1;
    result += i + ' ';
}
while (i > 0 && i < 5);

if (result != '') {
    console.log(result);
} else {
    console.log("No Result")
}
// End of Do While Loop
// Notes: The result of this is a string of the numbers 1-5, despite the initial condition not meeting the "While" declaration

//Beginning of For Loop
result = '';


for (let i = 0; i <= 5; i++) {
    result += i + ' ';
}

if (result != '') {
    console.log(result);
} else {
    console.log("No Result")
}
//End of For Loop
// Notes: The result of the For loop is a string of the numbers 0-5

// Beginning of While Loop
result = '';
i = 0;
while (i > 0 && i < 5) {
    i++;
    result += i + ' ';
}
if (result != '') {
    console.log(result);
} else {
    console.log("No Result")
}
// End of While Loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}