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

  function getDrinks(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(drinks => console.log(drinks))
  }

  document.querySelector('.add-drink-form').addEventListener('submit', handleSubmit)
  
  function handleSubmit(e){
      e.prev
  }