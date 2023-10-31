const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((item) => {
  const ingredientList = document.createElement("li");

  ingredientList.classList.add("item");
  ingredientList.textContent = item;
  return ingredientList;
});

console.log(ingredientEl);

ingredientsContainerEl.append(...ingredientEl);
