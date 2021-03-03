'use strict';

// var firstName = 'Matilda' // creates firstName prop for 'Window' object (see below)

const daniel = {
    firstName: 'Daniel',
    year: 1994,
    calcAge: function () {
        console.log(this);
        console.log(2021 - this.year);
    },
    greet: () => console.log(`Hey ${this.firstName}`),
}

daniel.greet(); // returns undefined, arrow func don't get their 'this' and in this case it gets up to the global scope as object is not a block but an object literal.
// if the var from above was declared 'this' would reference 'Window' object and get the firstName = Matilda. WATCH OUT FOR THAT BEHAVIOR! Never use an arrow function as a method.

