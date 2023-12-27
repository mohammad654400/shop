let cardTemplate = document.getElementById("card-template");

var cardContainer = document.querySelector(".card-container");

var copy = cardTemplate.cloneNode(true);

copy.style.display = "block";

var input = document.getElementById("search-input");

var viewMore = document.querySelector("#view-more");

var visibleItems = 6;

const categoriesElements = document.querySelectorAll("[data-category]");

let selectedCategory = "";

let remove = document.getElementById("removee");

var categories = {
  men: "men",
  women: "women",
  child: "child",
};

var data = [
  {
    id: 0,
    title: "Shiny Dress",
    desc: "0",
    img: "https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/0303203166GRN_Women-Kurti_Fashion-Bug-Sri-Lanka-3.jpg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.child,
  },
  {
    id: 1,
    title: "Long Dress",
    desc: "1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRj4w3UZ8ReAV13JoTNbijjZtp2irgjcIsybuwbQWdVrs1dzPHHy2H6sClvq8oh35_n24&usqp=CAU",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.child,
  },
  {
    id: 2,
    title: "Full Sweater",
    desc: "hii",
    img: "https://img.freepik.com/premium-photo/gorgeous-sensual-blonde-woman-fashion-antique-white-dress_149155-2875.jpg?w=996",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.child,
  },
  {
    id: 3,
    title: "White Dress",
    desc: "hii",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL-gLmAMKrxYNSLUE9Zeuf9s0EG4DM-XFeb2B7aly3SZy0fJ-wLPF4wYNOkUh1NNIGxw&usqp=CAU",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 4,
    title: "Colorful Dress",
    desc: "hii",
    img: "https://media.kingapp.pl/media/f022b960-8ac0-11ea-919c-6271856f468d/2a472578-e2ae-11ea-a83a-6271856f468d/t_s_h_360_w_263.jpeg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 5,
    title: "White Shirt",
    desc: "hii",
    img: "https://static.vecteezy.com/system/resources/thumbnails/012/915/053/small/happy-asian-girl-in-coat-posing-with-peace-sign-studio-shot-of-laughing-japanese-woman-taking-self-photo.jpg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.men,
  },
  {
    id: 6,
    title: "Shiny Dress",
    desc: "hii",
    img: "https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/0303203166GRN_Women-Kurti_Fashion-Bug-Sri-Lanka-3.jpg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 7,
    title: "Long Dress",
    desc: "hii",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRj4w3UZ8ReAV13JoTNbijjZtp2irgjcIsybuwbQWdVrs1dzPHHy2H6sClvq8oh35_n24&usqp=CAU",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 8,
    title: "Full Sweater",
    desc: "hii",
    img: "https://img.freepik.com/premium-photo/gorgeous-sensual-blonde-woman-fashion-antique-white-dress_149155-2875.jpg?w=996",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 9,
    title: "White Dress",
    desc: "hii",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL-gLmAMKrxYNSLUE9Zeuf9s0EG4DM-XFeb2B7aly3SZy0fJ-wLPF4wYNOkUh1NNIGxw&usqp=CAU",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 10,
    title: "Colorful Dress",
    desc: "hii",
    img: "https://media.kingapp.pl/media/f022b960-8ac0-11ea-919c-6271856f468d/2a472578-e2ae-11ea-a83a-6271856f468d/t_s_h_360_w_263.jpeg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.women,
  },
  {
    id: 11,
    title: "White Shirt",
    desc: "hii",
    img: "https://static.vecteezy.com/system/resources/thumbnails/012/915/053/small/happy-asian-girl-in-coat-posing-with-peace-sign-studio-shot-of-laughing-japanese-woman-taking-self-photo.jpg",
    star: "../img/stars.svg",
    price: "$95.50",
    Condition: "Almost Sold Out",
    category: categories.men,
  },
];

function drawCard(value) {
  var htmlRes = "";

  var filteredData = data.filter(function (cardData) {
    if (selectedCategory && cardData.category !== selectedCategory) {
      return false;
    }

    return cardData.title.includes(value);
  });

  filteredData.slice(0, visibleItems).forEach(function (cardData) {
    copy.querySelector("#card-title").textContent = cardData.title;

    copy.querySelector(
      "#card-image"
    ).style.backgroundImage = `url(${cardData.img})`;

    copy.querySelector(
      "#card-star"
    ).style.backgroundImage = `url(${cardData.star})`;

    copy.querySelector("#price").textContent = cardData.price;

    copy.querySelector("#Condition").textContent = cardData.Condition;

    htmlRes += copy.innerHTML;
  });

  cardContainer.innerHTML = htmlRes;
}

let prevElement;

categoriesElements.forEach((categoryElement) => {
  categoryElement.addEventListener("click", function (e) {
    e.preventDefault();

    if (prevElement) {
      prevElement.classList.remove("active-nav-arrivals");
    }

    e.target.classList.add("active-nav-arrivals");

    selectedCategory = e.target.getAttribute("data-content");
    drawCard(input.value);

    prevElement = e.target;
  });
});

viewMore.addEventListener("click", function () {
  visibleItems = data.length;

  drawCard(input.value);

  viewMore.style.display = "none";
});

drawCard("");

input.addEventListener("input", function (event) {
  var value = event.target.value;

  drawCard(value);
});

cardContainer.addEventListener("click", function () {
  window.location.href = "item-shop.html";
});

if (remove) {
  remove.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(1);
  });
}
