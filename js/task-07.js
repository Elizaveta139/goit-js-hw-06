const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changingTextSize = (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeControl.addEventListener("input", changingTextSize);
