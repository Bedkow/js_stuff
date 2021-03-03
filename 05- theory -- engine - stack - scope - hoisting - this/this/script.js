'use strict';

console.log(this); 

const calcAge = function (birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
}

calcAge(1994);

const calcAgeArrow = birthYear => {
    console.log(2021 - birthYear);
    console.log(this);
}

calcAgeArrow(1990);

// arrow functions don't get their own 'this' keyword, they use 'this' from their parent function (in the case above to the global scope, so to 'Window')

const daniel = {
    year: 1994,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);
    }
}
daniel.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = daniel.calcAge; // giving matilda obj the method (method borrowing)
console.log(daniel);
console.log(matilda);

matilda.calcAge(); // uses this for mathilda's this.year

//  (º﹃º )
//  (⊙﹏⊙)
// ¯\_(ツ)_/¯

const f = daniel.calcAge; // the function is copied to the const
console.log(f);
// f(); // gives error because 'this' is now undefined in f()

