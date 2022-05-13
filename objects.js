let time = 1700;
let offer = "none";

const cafe = {
    name: "Whitesheep",
    seating_capacity: 100,
    has_special_offers: true,
    drinks: [
        "Cappuchino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfast_offer: "Free Croissant with coffee",
    lunch_offer: "Free drink with a surprisingly priced sandwich",
    no_offer: "Sorry, no offer.",

    openCafe: () => {
        if (this.has_special_offers) {
            return "Time for a special offer";
        }
    },
    closeCafe: () => {
        return "We're closed, come back tomorrow";
    },
    checkOffers(time) {
        if (time < 1100) {
            offer = this.breakfast_offer;
            return this.breakfast_offer;
        } else if (time < 1500) {
            offer = this.lunch_offer;
            return this.lunch_offer;
        } else {
            offer = this.no_offer;
            return this.no_offer;
        }
    }


};


cafe.biscuits = ["Waffle", "Shortbread"];
console.log(cafe.checkOffers(1000));
console.log(cafe.checkOffers(1200));
console.log(cafe.checkOffers(1400));
console.log(cafe.checkOffers(1600));
console.log(cafe.checkOffers());





const weekend_alarm = {
    alarm: "No alarm needed"
};
const weekday_alarm = {
    alarm: "Get up at 7AM"
};

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekends = ["Saturday", "Sunday"];

day = "Sunday";
alarm = "";

if (weekdays.includes(day)) {
    console.log(weekday_alarm.alarm);
    alarm = weekday_alarm.alarm;
} else if (weekends.includes(day)) {
    console.log(weekend_alarm.alarm);
    alarm = weekend_alarm.alarm;
} else {
    console.log("Day not recognised");
}

// Activity 1:
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}”

const person = {
    name: "Evo",
    age: 25,

    sayHi() {
        return `Hello my name is ${this.name}`;
    }
};
console.log(person.sayHi());

// person.songs = [
//     "Toss a coin to your witcher",
//     "Vicetone & Tony Igy - Astronomia",
//     "LVCRFT - AWOOO"
// ];

// console.log(person.songs);

// Activity 2:
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking

const pet = {
    name: "Alfie",
    type: "Dog",
    age: 8,
    colour: "Tan",

    eat() {
        return `${this.name} is eating.`
    },
    drink() {
        return `${this.name} is drinking`
    }
};

console.log(pet.eat());
console.log(pet.drink());

// Activity 3:
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all
// items chosen with costs and total costs.

let cost = 0;
let order = "";


const clearOrder = () => {
    cost = 0;
    order = "";
}

const coffee_shop = {
    branch: "Ashton",
    drink_prices: {
        "Tea": 1.30,
        "Coffee": 1.45,
        "Hot Chocolate": 1.60
    },
    food_prices: {
        "Ham Sandwich": 2.50,
        "Meat Pie": 1.00,
        "Chicken Salad": 3.20,
        "Sausage Roll": 1.15
    },
    getMenu() {
        console.log("Drink Prices: ");
        console.log(this.drink_prices)

        console.log("Food Prices: ");
        console.log(this.food_prices)
    },
    foodOrdered(food) {
        // This currently allows me to see that some elements can be found, however I am currently unable to list them
        // const found = food.some(r => this.food_prices[0].indexOf(r) >= 0);
        // return found

        food.forEach(item => cost += this.food_prices[item]);
        food.forEach(item => order += `a £${this.food_prices[item].toFixed(2)} ${item}, `);
        let out = `Your order of ${order}comes to a todal of £${cost.toFixed(2)}`;

        clearOrder();
        return out;
    },
    drinkOrdered(food) {
        // This currently allows me to see that some elements can be found, however I am currently unable to list them
        // const found = food.some(r => this.food_prices[0].indexOf(r) >= 0);
        // return found

        food.forEach(item => cost += this.drink_prices[item]);
        food.forEach(item => order += `a £${this.drink_prices[item].toFixed(2)} ${item}, `);
        let out = `Your drink order of ${order}comes to a todal of £${cost.toFixed(2)}`;

        clearOrder();
        return out;
    }
};

drink_order = ["Tea", "Hot Chocolate"];
food_order = ["Ham Sandwich", "Sausage Roll"];

coffee_shop.getMenu();
console.log(coffee_shop.foodOrdered(food_order));
console.log(coffee_shop.drinkOrdered(drink_order));