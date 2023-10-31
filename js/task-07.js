const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onChangingTextSize = (event) =>
  (textEl.style.fontSize = `${event.currentTarget.value}px`);

fontSizeControl.addEventListener("input", onChangingTextSize);
