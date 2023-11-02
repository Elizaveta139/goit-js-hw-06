function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const numberEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const onButtonCreateClick = () => {
  boxesEl.innerHTML = "";
  // const amountEl = numberEl.value;
  createBoxes(numberEl.value);
};

const createBoxes = (amount) => {
  let basSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const sizeEl = basSize + i * 10;

    box.style.width = `${sizeEl}px`;
    box.style.height = `${sizeEl}px`;
    box.style.backgroundColor = getRandomHexColor();
    // const divEl = `<div style="width: ${sizeEl}px; heigth: ${sizeEl}px; background-color: ${getRandomHexColor()};"></div>`;
    boxesEl.append(box);
  }

  numberEl.value = "";
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  // numberEl.value = "";
};

createBtn.addEventListener("click", onButtonCreateClick);
destroyBtn.addEventListener("click", destroyBoxes);
