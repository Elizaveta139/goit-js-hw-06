const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const inputValue = ({ currentTarget }) => {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = currentTarget.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", inputValue);
