'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
    let output = `${firstName}, you're ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // const firstName = 'Steven'; -> it is found in the block so it is chosen over the higher scope one
        const str = `${firstName} millenial, lol`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
        // output = 'New'; -> it overwrites the variable because it reassigns it, not declares. If it declared, it would be a new, independent variable with the same name accessible only in this scope
    }
// console.log(str); -> reference error (const is block-scoped)
// console.log(millenial); -> logs normally (var is function-scoped)
// console.log(add(2, 3)); -> strict mode 'causes' ref error
}

printAge();

return age;
}

const firstName = 'Daniel';
calcAge(1994);