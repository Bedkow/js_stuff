'use strict';

// function logger() {
//     console.log("nibba");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = "Juice with " + apples + " apples and" + oranges + " oranges"
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);

// const appleOrangeJuice = fruitProcessor(2, 4);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function calcAge1(birthYear) {
//     const age = 2020 - birthYear;
//     return age;
// }

// function calcAge1(birthYear) {
//     return 2020 - birthYear;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//     return 2020 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const calcAge3 = birthYear => 2020 - birthYear;
// const age3 = calcAge3(1991);

// const yearsUntilRetirement = birthyear => {
//     const age = 2020 - birthyear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement)(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return "$(firstName) retires in $(retirement) years";
// }

// console.log(yearsUntilRetirement())

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// fruitProcessor(2, 3);

// @@@@@@@@@ ARRAYS

// Exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [age1, age2, age3] // OR just call functions from above

// @@ more arrays

// const friends = ['Michael', 'Steven', 'Peter'];

// friends.push('Jay');
// friends.unshift('John');

// friends.pop(); // returns the removed element
// friends.shift(); // returns the removed element

// friends.indexOf('Steven'); // index of 'Steven', if missing returns -1
// friends.includes('Steven'); // returns true/false, tests strict value


// @@@@ OBJECTS@@@@@@@@@@@@@@@@@@@@@@@

// const daniel = {
//     firstName: 'Daniel',
//     lastName: 'Bednarek',
//     age: 2021 - 1994,
//     job: 'publisher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(daniel.lastName);
// console.log(daniel['lastName']);

// const nameKey = 'Name';
// console.log(daniel['first' + nameKey]);
// console.log(daniel['last' + nameKey]);

// const interestedIn = prompt('firstName/lastName/age/job/friends');

// if (daniel[interestedIn]) {
// console.log(daniel[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

// daniel.location = 'Poland';
// daniel['GitHub'] = '@Bedkow';

// console.log(daniel.firstName + ' has ' + daniel.friends.length + ' friends, and his best friend is ' + daniel.friends[0]);

const daniel = {
    firstName: 'Daniel',
    lastName: 'Bednarek',
    birthYear: 1994,
    job: 'publisher',
    friends: ['Michael', 'Peter', 'Steven'],
    hadDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2020 - birthYear;
    // }
    // calcAge: function () {
    //     return 2020 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    }
};

console.log(daniel.calcAge());
console.log(daniel.age);
// function licence (daniel) {
//     if (daniel.hadDriversLicence == true) {
//         word = "a";
//     } else {
//         word = "no";
//     } return word;
// }

// @@ mini challenge (i didnt use this.object) @@
var word
if (daniel.hadDriversLicence == true) {
    word = "a";
    } else {
    word = "no";
    }


console.log(daniel.firstName + " is a " + daniel.age + "-year old " + daniel.job + ", and he has " + word
+ " driver's licence")
