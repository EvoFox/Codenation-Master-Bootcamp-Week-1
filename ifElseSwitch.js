// // // 1.4 If Else Switch

// let weather = "sunny";

// if (weather == "sunny")
// {
//     console.log("It's a scorcher today");
// } else if (weather == "rainy")
// {
//     console.log("It's chuckin' it down");
// } else
// {
//     console.log("It's not made its mind up yet.");
// }

// == Equal to
// === Strictly equal to (Datatype must match)

// if (1 != "1")
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }


// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny")
// {
//     console.log("Check again");
// } else if (place == "Manc" && weather == "Rain")
// {
//     console.log("Obvs");
// } else
// {
//     console.log("What? It isn't raining?");
// }

// let day = "Saturday";

// if (day == "Saturday" || day == "Sunday")
// {
//     console.log("It's weekend");
// } else
// {
//     console.log("When is weekend?");
// }


// let car = "Suzuki";

// switch (car)
// {
//     case "Ford":
//     case "GM":
//         console.log("American car");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("French car");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese car");
//         break;
//     case "Mercedes":
//         console.log("Mercedes");
//         break;
//     case "Volkswagen":
//         console.log("German car");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korean");
//         break;
//     default:
//         console.log("Car not in list");
// }

// An interesting observation here, I was under the impression that each case would need their own response
// Not that they could inherit from the following one, should they not have a response.

// const grade = 87;
// switch (true){
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed")
// }


// Activity 1: JS
// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater
// than 17 and else logs “You aren’t old enough”.
// let age = 18;

// if (age > 17)
// {
//     console.log("Yes, I can serve you");
// } else
// {
//     console.log("No I cannot serve you");
// }


// Stretch
// Take your if statement and add a variable
// called country in.
// Eg. if age > 17 and country == “UK”.
// let country = "USA"

// if (age > 17 && country == "UK")
// {
//     console.log("Yes, I can serve you");
// }
// else if (age > 20 && country == "USA") {
//     console.log("Yes, I can serve you");
// }
// else
// {
//     console.log("No I cannot serve you");
// }

// let test = "lanal";
// let split_test = test.split();
// let reverse_test = split_test.reverse();
// let result = reverse_test.join();
// console.log(test == result);

// Activity 2: Create a variable for any pizza topping. JS
// Create a switch statement, if the topping is one of your
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.

// let topping = "Olives"
//     // ["pepperoni", "Cheese", "Sweetcorn"];

// switch (topping)
// {
//     case "Pepperoni":
//     case "Cheese":
//     case "Sweetcorn":
//         console.log(`${topping} is important for my pizza`);
//         break;
//     case "Olives":
//     case "Pineapple":
//         console.log(`${topping} (does not/do not) belong on a pizza`);
//         break;
//     default:
//         console.log(`I don't mind having ${topping} on a pizza`);
// }

// Activity 3: Create a variable called password.
// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too
// short. Otherwise log the password to the console.
// let pw = "password123";

// if (pw.length < 8)
// {
//     console.log("Password is too short");
// } else
// {
//     console.log(pw)
// }

// Activity 4:
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
// Otherwise log something else.
// let num = 11;

// if (num % 3 == 0 || num % 5 == 0)
// {
//     console.log(`${num} is divisible by 3 or 5`);
// } else
// {
//     console.log(`${num} is NOT divisible by 3 or 5`);
// }

// Activity 5:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console. Otherwise log num to the console.
// let num = 7;

// if (num % 3 == 0 && num % 5 == 0)
// {
//     console.log("fizz buzz");
// } else if (num % 3 == 0)
// {
//     console.log("Fizz");
// } else if (num % 5 == 0)
// {
//     console.log("Buzz");
// } else
// {
//     console.log(num)
// }

// Activity 6:
// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).
// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).

// let num = 77077;
// let num_reverse = parseInt(String(num).split('').reverse().join(''));


// if (num == num_reverse)
// {
//     console.log(`${num} is a palindrome!`)
// } else
// {
//     console.log(`${num} is NOT a palindrome!`)
    
// }


// Activity 7:
// Create a variable called time, a variable called placeOfWork
// and a variable called townOfHome. Create an if statement that
// logs to the console where someone is at times of the day. E.g. if
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
// let time = 7;
// let place_of_work = "Manchester";
// let place_of_home = "Hyde";

// if (time == 7)
// {
//     console.log(`I'm at home in ${place_of_home}`);
// } else if (time == 8)
// {
//     console.log(`I'm commuting to ${place_of_work}`);
// } else if (time == 9)
// {
//     console.log(`I'm working in ${place_of_work}`);
// } else
// {
//     console.log(`I don't know where I am`)
// }

// Activity 8:
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
// index of a last vowel in the string.

// let my_string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
// let vowels =  ['a','e','i','o','u'];

// let arr = my_string.split("").reverse(); 
// let last_vowel_index = arr.findIndex(e => vowels.includes(e));

// if(last_vowel_index != -1) { 
//   let index = my_string.length-1-last_vowel_index;
//   console.log(`Last vowel found at index ${index}: ${my_string[index]}`);
// }

// Activity 9:
// Create a variable called word that takes a string. Create
// an if statement that checks if the last letter is the same as
// the first. If it is return true, otherwise return false
// let word = "divided";

// if (word[0] == word[word.length - 1])
// {
//     console.log(true);
// } else
// {
//     console.log(false);
// }


// Activity 10:
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the
// sum is even. If it is return the number, otherwise return
// the numbers multiplied together.
// let num1 = 43;
// let num2 = 43;

// let sum = num1+num2
// if (sum % 2 == 0)
// {
//     console.log(sum)
// } else
// {
//     console.log(`The numbers added together were ${num1} and ${num2}`)
// }
