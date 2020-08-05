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
    return score;
}

const decreaseScore = () => {
    score -= 1;
    printToDom('score', score);
    return score;
}

const resetScore = () => {
    score = 0;
    printToDom('score', score);
    return score;
}

const init = () => {
    buttonEvents();
}

init();