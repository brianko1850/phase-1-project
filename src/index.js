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
    <img src="${drink.image}">
    <div class="content">
    <h4>${drink.name}</h4>
    <p>${drink.preparation}</p>
    <div>
    `
    document.querySelector('#drink-collection').appendChild(card)

  }

  function getDrinks(){
      fetch('http://localhost:3000/cocktails')
      .then(res => res.json())
      .then(drinks => console.log(drinks))
  }

  document.querySelector('.add-drink-form').addEventListener('submit', handleSubmit)
  
  function handleSubmit(e){
      e.prev
  }