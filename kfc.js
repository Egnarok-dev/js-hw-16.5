import foodData from "./dataFood.js";
// console.log(foodData);

const menuListCards = document.querySelector(".js_list_cards_menu");
menuListCards.style.width = "1137px";
menuListCards.style.display = "flex";
menuListCards.style.justifyContent = "space-between";
menuListCards.style.flexWrap = "wrap";
menuListCards.style.margin = "12px 150px 0 150px";
// console.log(menuListCards);

const makeMenuCard = function ({
  id,
  name,
  description,
  image,
  price,
  quantity,
}) {
  const cardElement = document.createElement("article");
  cardElement.style.width = "350px";
  cardElement.style.height = "525px";
  cardElement.style.background =
    "linear-gradient(152.79deg, #E9F3FD 12.85%, #E8E8FF 49.53%, #E9F3FD 89.41%)";
  cardElement.style.boxShadow = "0px 0px 15px 5px rgba(0, 0, 0, 0.15)";
  cardElement.style.borderRadius = "60px";
  cardElement.style.marginTop = "75px";
  cardElement.style.position = "relative";

  const imgElement = document.createElement("img");
  imgElement.classList.add("card_img");
  imgElement.src = image;
  imgElement.style.width = "350px";
  imgElement.style.height = "323px";
  imgElement.style.borderRadius = "22px";

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("card_description");
  descriptionElement.textContent = description;
  // descriptionElement.style.fontFamily = 'Roboto'
  descriptionElement.style.width = "272px";
  descriptionElement.style.height = "73px";
  descriptionElement.style.fontWeight = "400";
  descriptionElement.style.fontSize = "18px";
  descriptionElement.style.lineHeight = "21px";
  descriptionElement.style.textAlign = "center";
  descriptionElement.style.textTransform = "capitalize";
  descriptionElement.style.color = "rgba(0, 0, 0, 0.5)";
  descriptionElement.style.margin = "19px 39px 0";

  const priceElement = document.createElement("p");
  priceElement.classList.add("card_price");
  priceElement.textContent = `${price}$`;
  priceElement.style.fontWeight = "700";
  priceElement.style.fontSize = "36px";
  priceElement.style.lineHeight = "42px";
  priceElement.style.textAlign = "center";
  priceElement.style.textTransform = "capitalize";
  priceElement.style.color = "#000000";
  priceElement.style.margin = "25px 228px 44px 80px";

  const quantityElement = document.createElement("div");
  quantityElement.classList.add("card_quantity");
  quantityElement.textContent = "+";
  quantityElement.style.display = "flex";
  quantityElement.style.justifyContent = "center";
  quantityElement.style.alignItems = "center";
  quantityElement.style.fontSize = "40px";
  quantityElement.style.width = "70px";
  quantityElement.style.height = "70px";
  quantityElement.style.background = "#212135";
  quantityElement.style.borderRadius = "100%";
  quantityElement.style.color = "white";
  // quantityElement.style.margin = '20px 21px 18px 0'
  quantityElement.style.boxShadow =
    "0px 0px 20px #212135, 0px 0px 10px #212135";
  quantityElement.style.position = "absolute";
  quantityElement.style.bottom = "18px";
  quantityElement.style.right = "21px";

  // const btnCardElement = document.createElement("button");
  // btnCardElement.classList.add("card_btn");
  // btnCardElement.textContent = "+";
  // btnCardElement.style.display = "flex";
  // btnCardElement.style.justifyContent = "center";
  // btnCardElement.style.alignItems = "center";
  // btnCardElement.style.fontSize = "40px";
  // btnCardElement.style.width = "70px";
  // btnCardElement.style.height = "70px";
  // btnCardElement.style.background = "#212135";
  // btnCardElement.style.borderRadius = "100%";
  // btnCardElement.style.color = "white";
  // // btnCardElement.style.margin = '20px 21px 18px 0'
  // btnCardElement.style.boxShadow =
  //   "0px 0px 20px #212135, 0px 0px 10px #212135";
  // btnCardElement.style.position = "absolute";
  // btnCardElement.style.bottom = "18px";
  // btnCardElement.style.right = "21px";

  cardElement.append(
    imgElement,
    descriptionElement,
    priceElement,
    quantityElement
  );
  return cardElement;
};

const elementRef = foodData.map(makeMenuCard);
console.log(elementRef);

menuListCards.append(...elementRef);
