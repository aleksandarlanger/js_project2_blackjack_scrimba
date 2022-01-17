let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let gameOver = false;
let message = "";

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

// Function and related variables

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  if (isAlive === false) {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Total points: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🃏 ";
  } else if (sum === 21) {
    message = "You've got Blackjack! 🎉";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! Draw 2 new cards to try again. 😰";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

function newGame() {
  location.reload();
}
