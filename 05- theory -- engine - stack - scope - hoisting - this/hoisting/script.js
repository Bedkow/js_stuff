'use strict';
// hoisting

// variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(me);  // -> undefined (var hoisted but as undefined)
// console.log(job); // -> cannot access before init.
// console.log(year); // -> -//-

var me = "Daniel";
let job = 'publisher';
const year = 1994;

// functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// console.log(addDecl(2, 3)); // -> able to call before declaring
// console.log(addExpr(2, 3)); // -> ref error, it is a const
// console.log(addArrow(2, 3)); // -> -//-

// if const is changed for var, error: "xyz is not a function" because it becomes undefined and gets hoisted
// only can call a function before declaring it if it is the 'function xyz(a, b) {}' declaration

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example //////////////
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}
////////////// function executes because var gets hoisted and == undefined, products get deleted! 

///// window object

console.log()
console.log()
console.log()