const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fontSizeControl.value}px`;

const onChangingTextSize = (event) =>
  (textEl.style.fontSize = `${event.currentTarget.value}px`);

fontSizeControl.addEventListener("input", onChangingTextSize);
