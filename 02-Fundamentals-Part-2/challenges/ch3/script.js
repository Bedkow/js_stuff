const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    },
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    },
}
var higherName;
var lowerName;
var higherBMI;
var lowerBMI;

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    higherName = mark.fullName;
    higherBMI = mark.bmi;
    lowerName = john.fullName;
    lowerBMI = john.bmi
} else {
    higherName = john.fullName;
    higherBMI = john.bmi
    lowerName = mark.fullName;
    lowerBMI = mark.bmi;
}

console.log(higherName + "'s BMI (" + parseInt(higherBMI) + ") is higher than " + lowerName + "'s (" + parseInt(lowerBMI) +")!");

