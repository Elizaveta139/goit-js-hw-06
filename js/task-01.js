const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

const numberItemsInCategory = document.querySelectorAll("h2");

numberItemsInCategory.forEach((elem) => {
  console.log("Category:", elem.textContent);
  console.log("Elements:", elem.nextElementSibling.children.length);
});
