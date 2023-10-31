function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValue = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");

const onChangeColorClick = () => {
  colorValue.textContent = body.style.backgroundColor;
  body.style.backgroundColor = getRandomHexColor();
};

changeColorButton.addEventListener("click", onChangeColorClick);
