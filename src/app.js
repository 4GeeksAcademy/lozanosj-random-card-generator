/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let type = ["♦", "♥", "♠", "♣"];

  function generateRandomCard() {
    let indexRandNumber = Math.floor(Math.random() * numbers.length);
    let indexRandType = Math.floor(Math.random() * type.length);

    let randNumber = numbers[indexRandNumber];
    let randType = type[indexRandType];

    return { number: randNumber, type: randType };
  }

  let card = generateRandomCard();

  document.querySelector("#number").innerHTML = card.number;
  document.getElementById("type1").innerHTML = card.type;
  document.getElementById("type2").innerHTML = card.type;

  let fontColor = card.type === "♥" || card.type === "♦" ? "red" : "black";

  document.getElementById("type1").style.color = fontColor;
  document.getElementById("type2").style.color = fontColor;

  console.log(card);
};
