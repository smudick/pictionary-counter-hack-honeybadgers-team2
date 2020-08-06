'use strict'
let score = 0;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const buttonEvents = () => {
    document.querySelector("#increaseButton").addEventListener("click", increaseScore);
    document.querySelector("#decreaseButton").addEventListener("click", decreaseScore);
    document.querySelector("#resetButton").addEventListener("click", resetScore);
};

const increaseScore = () => {
    score += 1;
    printToDom('score', score);
    colorChange();
    return score;
}

const decreaseScore = () => {
    score -= 1;
    printToDom('score', score);
    colorChange();
    return score;
}

const resetScore = () => {
    score = 0;
    printToDom('score', score);
    colorChange();
    return score;
}

const colorChange = () => {
    if (score > 0) {
        document.querySelector('#score').style.color = '#008000';
    } else if (score < 0) {
        document.querySelector('#score').style.color = '#FF0000';
    } else {
        document.querySelector('#score').style.color = '#000000';
    }
}

const init = () => {
    buttonEvents(); 
}

init();