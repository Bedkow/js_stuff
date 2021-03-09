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

const { name, openingHours, categories } = restaurant; // order in objs doesnt matter so no need to "skip" like in arr
console.log(name, openingHours, categories);

const { //destruct + giving different variable names
  name: restaurantName, 
  openingHours: hours, 
  categories: tags 
} = restaurant;
console.log(restaurantName, hours, tags);

