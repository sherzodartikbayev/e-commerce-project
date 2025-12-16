document.addEventListener("DOMContentLoaded", () => {
  // Products Array
  const products = [
    {
      image: "/images/products/image-1.png",
      sale: "50%",
      isSaved: false,
      priceByCard: 44.5,
      priceByDefault: 50.5,
      title: "Г/Ц Блинчики с мясом вес, Россия",
      star: 2,
    },
    {
      image: "/images/products/image-2.png",
      sale: "50%",
      isSaved: false,
      priceByCard: 44.5,
      priceByDefault: 50.5,
      title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
      star: 3,
    },
    {
      image: "/images/products/image-3.png",
      sale: "50%",
      isSaved: false,
      priceByCard: 44.5,
      priceByDefault: 50.5,
      title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      star: 5,
    },
    {
      image: "/images/products/image-4.png",
      sale: "50%",
      isSaved: false,
      priceByCard: 44.5,
      priceByDefault: 50.5,
      title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      star: 5,
    },
  ];

  // Elements
  const cardContainer = document.querySelector(".card__container");

  products.map((product) => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("card");
    elementDiv.innerHTML = `
        <div class="card__image">
            <div class="card__save__btn">
              <img src="./icons/like.svg" alt="like">
            </div>

            <img src=${product.image}>

            <div class="card__sale__badge">
              <p>${product.sale}</p>
            </div>
          </div>

          <div class="card__info">
            <!-- Product Price -->
            <div class="card__info__price">
              <div class="card__info__price__card">
                <p class="card__price__value">${product.priceByCard} ₽</p>
                <p class="card__price__type">С картой</p>
              </div>

              <div class="card__info__price__default">
                <p class="card__price__value__default">${product.priceByDefault} ₽</p>
                <p class="card__price__type">Обычная</p>
              </div>
            </div>

            <!-- Product Title -->
            <h2 class="card__info__title">${product.title}</h2>

            <!-- Product Stars -->
            <div class="card__info__starts">
              <img src="./icons/star.svg" alt="star">
              <img src="./icons/star.svg" alt="star">
              <img src="./icons/star.svg" alt="star">
            </div>

            <button class="card__info__btn">
              В корзину
            </button>
          </div>
    `;

    cardContainer.append(elementDiv);
  });
});
