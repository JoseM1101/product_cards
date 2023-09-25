import Card from "./Card.js";

const cardsContainer = document.querySelector(".cards");
const addCardBtn = document.querySelector(".add-card");
const removeCardBtn = document.querySelector(".remove-card");

class App {
  cards = [];

  constructor() {
    for (let i = 0; i <= 6; i++) {
      this.cards.push(new Card());
    }

    addCardBtn.addEventListener(
      "click",
      this.manageButtonPress.bind(this, this.addCard.bind(this))
    );
    removeCardBtn.addEventListener(
      "click",
      this.manageButtonPress.bind(this, this.removeCard.bind(this))
    );
  }

  manageButtonPress(buttonFn) {
    this.cleanCardsContainer();
    buttonFn();
    this.renderCards();
  }

  addCard() {
    this.cards.push(new Card());
  }

  removeCard() {
    this.cards.pop();
  }

  cleanCardsContainer() {
    cardsContainer.innerHTML = "";
  }

  init() {
    this.renderCards();
  }

  renderCards() {
    this.cards.forEach((card) => {
      cardsContainer.insertAdjacentHTML("beforeend", card.render());
      card.addEventListeners();
    });
  }
}

const app = new App();
app.init();
