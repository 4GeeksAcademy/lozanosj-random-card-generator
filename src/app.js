/* eslint-disable */
import "bootstrap";
import "./style.css";

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
    let indexRandomNumber = Math.floor(Math.random() * numbers.length);
    let indexRandomType = Math.floor(Math.random() * type.length);

    let randomNumber = numbers[indexRandomNumber];
    let randomType = type[indexRandomType];

    return { number: randomNumber, type: randomType };
  }

  let card = generateRandomCard();

  document.querySelector("#number").innerHTML = card.number;
  document.getElementById("type1").innerHTML = card.type;
  document.getElementById("type2").innerHTML = card.type;

  let fontColor = card.type === "♥" || card.type === "♦" ? "red" : "black";

  document.getElementById("type1").style.color = fontColor;
  document.getElementById("type2").style.color = fontColor;
};
