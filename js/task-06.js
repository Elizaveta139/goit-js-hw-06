const inputRef = document.querySelector("#validation-input");

const onBorderColorInput = (event) => {
  if (Number(inputRef.dataset.length) === Number(inputRef.value.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onBorderColorInput);
