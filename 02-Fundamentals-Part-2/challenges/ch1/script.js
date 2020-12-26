// FUNCTIONS

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win with " + avgDolphins + " points");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win with " + avgKoalas + " points!");
    } else {
        console.log("Nobody wins!");
    }
}

// DATA

var DolphinsScore = calcAverage(85, 54, 41);
var KoalasScore = calcAverage(23, 34, 27);

checkWinner(DolphinsScore, KoalasScore);