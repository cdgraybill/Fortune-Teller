let luckyNumber = Math.floor(Math.random() * 100);
let luckyDay = decideLuckyDay();

function decideLuckyDay() {
    let decider = Math.random();

    if (decider > 0.5) {
        return true;
    } else {
        return false;
    }
}

function decideFortune() {
    let fortune = ["Your pursuits will soon pay off", 
                    "Take a step back and reevaluate your approach", 
                    "Better days are coming", 
                    "A relaxing vacation is is your future"];

    let decider = Math.floor(Math.random() * 4);
    return fortune[decider];
}

console.log(`Your lucky number is: ${luckyNumber}`);
console.log(`Your fortune: ${decideFortune()}`);
console.log(`Is today a lucky day? ${luckyDay}`);