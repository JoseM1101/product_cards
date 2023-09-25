class Card {
  imageUrl = "https://picsum.photos/300/200";
  title = "Lorem ipsum dolor sit amet consectetur.";
  description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque cumque quod! Dolor, laudantium inventore nostrum sapiente nobis et repellendus quisquam quis corporis eius voluptates eos dignissimos veniam ratione numquam!";
  quantity = 1;
  #id = Math.random().toString(16).slice(2);

  constructor(price = 12) {
    this.price = price;
  }

  increaseQty() {
    this.quantity++;
  }

  addEventListeners() {
    const button = document.querySelector(`.card.id${this.#id} button`);
    const qty = document.querySelector(`.card.id${this.#id} .qty`);

    button.addEventListener("click", () => {
      this.increaseQty();
      qty.textContent = this.quantity;
    });
  }

  render() {
    return `
    <article class="card id${this.#id}">
    <img src=${this.imageUrl} alt="" />
    <h3 class="title">${this.title}</h3>
    <div class="info">
      <h3 class="price">${this.price}</h3>
      <div class="qty-wrapper">
        <p class="qty">${this.quantity}</p>
      </div>
    </div>
    <p class="description">${this.description}</p>
    <button class="add-to-cart">Add to cart</button>
    <a href="#" class="learn-more">Learn More</a>
  </article>
    `;
  }
}

export default Card;
