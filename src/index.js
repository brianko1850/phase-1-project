let addDrink = false;

document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#new-drink-btn");
    const drinkFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
      
      addDrink = !addDrink;
      if (addDrink) {
        drinkFormContainer.style.display = "block";
      } else {
        drinkFormContainer.style.display = "none";
      }
    });
  });