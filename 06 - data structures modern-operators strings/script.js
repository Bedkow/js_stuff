'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //24 h
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//@@@@@@@@@@@@@@@ Arrays @@@@@@@@@@@@@@//
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // original array not affected
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories; //dont have to take all elements from array

let [main, , secondary] = restaurant.categories; // 2nd element gets omitted

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from func
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, ${mainCourse}`);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// destructuring in destructuring :D
const [i, , [j, k]] = nested;
console.log(i, j, k);

//when we don't know the length of the array
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // the default value (1) is left for 'r'
*/
//@@@@@@@@@@@@ Objects @@@@@@@@@@@@@@//
/*
const { name, openingHours, categories } = restaurant; // order in objs doesnt matter so no need to "skip" like in arr
console.log(name, openingHours, categories);

const { //destruct + giving different variable names
  name: restaurantName, 
  openingHours: hours, 
  categories: tags 
} = restaurant;
console.log(restaurantName, hours, tags);

// with default values
const { menu = [], starterMenu: starters = []} = restaurant;

//mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c:14};

({a, b} = obj); // HAS TO BE WRAPPED IN () ! otherwise SyntaxEr

console.log(a, b);


//nested objects

const {
  fri: {open: o, close: c}, //giving different names
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Winiary, 10',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Piątkowska 2137',
  starterIndex: 1,
})
*/

//@@@@@@@@ Spread operator @@@@@@@@@@@//
/*
//bad example
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// good example
const newArr = [1, 2, ...arr]; //"...xyz" spreads the array xyz into individual entries
console.log(newArr);
console.log(...newArr); // returns all the elements individually 
// doesn't create new variables, turns the array into individual values, can be used only in places where we'd use values separated with commas

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// spread operator works on all iterables (maps, strings, arrays, sets BUT NOT objects)

const str = 'Daniel';
const letters = [...str, '', 'B.'];
console.log(letters);

// const ingredients = [prompt("Let's make pasta. Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// spread operator works on Objects since ES2018
// Objects//

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'} // spreads all the properties and copies them to the new object, can add more properties (here founder, founding year), the order does not matter 
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; //copy obj
restaurantCopy.name = 'Ristorante Roma'; //overwrite name
*/

/*
//@@@@@@@@@@@@@@@@@@@@@@ THE REST PATTERN @@@@@@@@@@@@@
// opposite of the spread operator
//to "pack" an array/object

// 1. Destructuring:

//arrays

//SPREAD because on the RIGHT side of "="
const arr = [1, 2, ...[3, 4]];

// REST (the remaining part) because on LEFT side of "="
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
// the rest pattern has to always be at the end

//objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2. Functions

const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
*/

//@@@@@@@@@@ Short Circuting (&&) @@@@@@@@@@@@@@@@@@
// - || returns the 1st truthy value
// - && returns the 1st falsy value
// - ?? returns the 1st nullish value (null or undefined)

//challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const players1 = game.players[0];
const players2 = game.players[1];

//2
const [gk, ...fieldPlayers] = players1;

//3
const allPlayers = [...players1, ...players2];

//4
