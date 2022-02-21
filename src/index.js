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

  function renderDrinks(drink) {

    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${drink.strDrinkThumb}">
    <div class="content">
    <h4>${drink.strDrink}</h4>
    <ul>
        <li>${drink.strIngredient1}</li>
        <li>${drink.strIngredient2}</li>
        <li>${drink.strIngredient3}</li>
        <li>${drink.strIngredient4}</li>
    </ul>
    <p>${drink.strInstructions}</p>
    <div>
    `
    document.querySelector('#drink-collection').appendChild(card)

  }

  function getDrinks(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(drinks => Object.entries(drinks).reduce((acc, [ key, value ]) => {
          Object.values(value).forEach((drinks, i) => {
            if (!acc[i]) acc[i] = { };
      acc[i][key] = data;
    });
    return acc;
  }, {  })).forEach(drink => renderDrinks(drink))
      }

  document.querySelector('.add-drink-form').addEventListener('submit', handleSubmit)
  
  function handleSubmit(e){
      e.prev
  }