let counterVatue = 0;

const valyeEl = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const onDecrementClick = (event) => {
  counterVatue -= 1;
  valyeEl.textContent = counterVatue;
};

const onIncrementClick = (event) => {
  counterVatue += 1;
  valyeEl.textContent = counterVatue;
};

decrementButton.addEventListener("click", onDecrementClick);
incrementButton.addEventListener("click", onIncrementClick);
