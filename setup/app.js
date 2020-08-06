"use strict";

let score1 = 0;
let score2 = 0;

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
  document
    .querySelector("#increaseButton")
    .addEventListener("click", increaseScore1);
  document
    .querySelector("#increaseButton2")
    .addEventListener("click", increaseScore2);
  document
    .querySelector("#decreaseButton")
    .addEventListener("click", decreaseScore1);
  document
    .querySelector("#decreaseButton2")
    .addEventListener("click", decreaseScore2);
  document.querySelector("#resetButton").addEventListener("click", resetScore1);
  document
    .querySelector("#resetButton2")
    .addEventListener("click", resetScore2);
};

const increaseScore1 = () => {
  score1 += 1;
  printToDom("scoreOne", score1);
  colorChange(score1, "scoreOne");
  return score1;
};

const increaseScore2 = () => {
  score2 += 1;
  printToDom("scoreTwo", score2);
  colorChange(score2, "scoreTwo");
  return score2;
};

const decreaseScore1 = () => {
  score1 -= 1;
  printToDom("scoreOne", score1);
  colorChange(score1, "scoreOne");
  return score1;
};

const decreaseScore2 = () => {
  score2 -= 1;
  printToDom("scoreTwo", score2);
  colorChange(score2, "scoreTwo");
  return score2;
};

const resetScore1 = () => {
  score1 = 0;
  printToDom("scoreOne", score1);
  colorChange(score1, "scoreOne");
  return score1;
};

const resetScore2 = () => {
  score2 = 0;
  printToDom("scoreTwo", score2);
  colorChange(score2, "scoreTwo");
  return score2;
};

const colorChange = (value, id) => {
  if (value > 0) {
    document.getElementById(id).style.color = "#008000";
  } else if (value < 0) {
    document.getElementById(id).style.color = "#FF0000";
  } else {
    document.getElementById(id).style.color = "#000000";
  }
};

const init = () => {
  buttonEvents();
};

init();
