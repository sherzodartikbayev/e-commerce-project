const products = [
  {
    id: 1,
    image: './images/products/img-3.png',
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99",
  },
  {
    id: 2,
    image: "./images/products/img-1.png",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "44,50",
  },
  {
    id: 3,
    image: "./images/products/img-6.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "159,99",
  },
  {
    id: 4,
    image: "./images/products/img-7.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39",
  },
   {
    id: 5,
    image: "./images/products/img-2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39",
  },
   {
    id: 6,
    image: "./images/products/img-6.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39",
  },
   {
    id: 7,
    image: "./images/products/img-3.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39",
  },
   {
    id: 8,
    image: "./images/products/img-7.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39",
  },
];

products.map((product) => {
  const card = document.createElement("div");
  card.className = "hero__card";
  card.innerHTML = `
                        <div class="hero__card__top">
                            <img src="${product.image}" alt="${product.title}" class="hero__card__img">
                        </div>
                            <div class="hero__card__bottom">
                                <p class="hero__card__cost">${product.price}<span class="marked">₽</span></p>
                                <p class="hero__card__text">${product.title}</p>
                                <img src="./images/icons/rating2.svg" alt="">
                                <button class="hero__card__btn">В корзину</button>
                            </div>
                    
	`;

  document.querySelector(".hero__card__box").append(card);
});