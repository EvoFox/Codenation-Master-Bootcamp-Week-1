let coffee_order = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

coffee_order[1] = "Ann - Vanilla Latte"; // Replace a record at [index]
coffee_order.push("Donna - Espresso"); // Adds a record onto the end of the array
coffee_order.pop(); // Removes a record from the end of the array

console.log(coffee_order);

// Activity 1:
// Make an array of 3 your favourite songs.
// Log them to the console.

let songs = [
    "Toss a coin to your witcher",
    "Vicetone & Tony Igy - Astronomia",
    "LVCRFT - AWOOO"
]

songs.forEach(item => console.log(item));

// Stretch
// Can you add another two songs to the list
// using a method and then remove the last one
// added?

songs.push("Svix - The Only Other Thing");
songs.push("Fox Stevenson - Like That");
songs.pop()

console.log(songs)

// Activity 2:
// Using MDN choose one of the following methods:
// map(), shift(), unshift(), splice(), unsplice().
// Create a program to demonstrate the use of the
// method.
// (Note: Not all methods would permanently
// update/make changes to the arrays themselves.)

let foods = ["Omelette", "Fried Rice", "Apple Pie", "Spaghetti"];

console.log(`Favourite foods; ${foods}`);

foods.splice(3, 0, "Apple Crumble", "Lasagna");

console.log(`Favourite foods (with some new ones); ${foods}`);