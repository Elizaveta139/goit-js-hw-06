const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const inputValue = (event) => {
  if (nameInput !== "") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", inputValue);
