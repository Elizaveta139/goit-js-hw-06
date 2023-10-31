let counterVatue = 0;

const valyeEl = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const clickOnDecrement = (event) => {
  counterVatue -= 1;
  valyeEl.textContent = counterVatue;
};

const clickOnIncrement = (event) => {
  counterVatue += 1;
  valyeEl.textContent = counterVatue;
};

decrementButton.addEventListener("click", clickOnDecrement);
incrementButton.addEventListener("click", clickOnIncrement);
