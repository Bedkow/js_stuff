function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        var tip = billValue * 0.15;
    } else {
        var tip = billValue * 0.20;
    }
    return tip
}

// var tip = calcTip(100);
// console.log("Tip = " + tip);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);