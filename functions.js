// let coffee_grinding = false;

// const grindCoffeeBeans = () => {
//     if (coffee_grinding) {
//         console.log("Stopping the grind...");
//         coffee_grinding = false;
//     } else {
//         console.log("Grinding is about to begin...");
//         coffee_grinding = true;
//     }
// };


// grindCoffeeBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account: ${accnum}`);
// };

// let accnum = 123456

// cashWithdrawal(250, 556475);
// cashWithdrawal(500, accnum);

const addUp = (num1, num2) => {
    return num1 + num2;
};

addUp(1, 14);
console.log(addUp(43, 2))

// const celciusFarenheitConversion = (celcius) => {
//     return celcius * (9 / 5);
// };

// const getFarenheit = (celcius) => {
//     return celciusFarenheitConversion(celcius) + 32;
// };

// console.log(`The temperature is ${getFarenheit(15)}°F`)

// Activity 1:
// syntax:
// function factorial(n) {
//     if ((n === 0) || n === 1) {
//         return 1;
//     } else {
//         return (n * factorial(n - 1));
//     }
// }

// console.log(factorial(33));

const factorial = (n) => {
    if ((n === 0 || n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
};

console.log(factorial(33));

// Activity 2:
// Edit the below snippet to include two parameters and a
// running order count updated when the function is called:

// order_count = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     order_count++;
// };

// takeOrder("Pineapple");

let order_count = 0;

const takeOrder = (topping, size) => {
    console.log(`Order: ${order_count} - ${size} Pizza with ${topping} topping.`);
    order_count++;
};


takeOrder("Pineapple", "Large");
takeOrder("Pepperoni", "Medium");

// Activity 3:
// Cash machine time!
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!

const pin = 1548;

let balance = 14500;

let failed = 0;
let locked = false;

const checkPin = (input) => {
    if (input === pin) {
        return true;
    } else {
        return false;
    }
};

const incrementFailed = () => {
    failed++
    if (failed >= 3) {
        locked = true;
    }
}

const withdrawCash = (amount, pin_no) => {
    if (checkPin(pin_no) && locked == false) {
        if (amount <= balance) {
            balance = balance - amount;
            console.log(`Withdrawing ${amount}, new balance: ${balance}`)
        } else {
            console.log(`Insufficient Funds to withdraw ${amount}; your current balance is ${balance}`)
        }
    } else if (locked == true) {
        console.log("Card is locked, card will be retained.");
    } else {
        incrementFailed();
        console.log("PIN Incorrect, this event has been logged.");
    }
};

withdrawCash(1400, 1548);
withdrawCash(3100, 1548);
withdrawCash(14000, 1548);

withdrawCash(500, 1111);
withdrawCash(500, 1111);
withdrawCash(500, 1111);
withdrawCash(500, 1111);