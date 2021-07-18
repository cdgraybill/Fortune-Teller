function decideLuckyDay() {
    let decider = Math.random();

    if (decider > 0.5) {
        return "true";
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

function decideLuckyNumber() {
    return Math.floor(Math.random() * 1000);
}

function displayFortune() {
    console.log(`Your lucky number is: ${decideLuckyNumber()}`);
    console.log(`Your fortune: ${decideFortune()}`);
    console.log(`Is today a lucky day? ${decideLuckyDay()}`);
}