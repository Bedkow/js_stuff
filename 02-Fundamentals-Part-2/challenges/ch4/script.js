var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    var tip = billValue * 0.15;
  } else {
    var tip = billValue * 0.2;
  }
  return tip;
}

var tip;

for (x = 0; x <= bills.length - 1; x++) {
  tip = calcTip(bills[x]);
  tips.push(tip);
  totals.push(bills[x] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

