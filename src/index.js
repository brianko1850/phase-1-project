let addDrink = false;

document.addEventListener("DOMContentLoaded", () => {
  getDrinks()

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
  document.querySelector('.add-drink-form').addEventListener('submit', handleSubmit)
});

function renderDrinks(drink) {
  let card = document.createElement('li')
  card.className="card"
  card.innerHTML = `

    <img src="${drink.image}" class="card-img">
    <div class="content">
      <h4>${drink.name}</h4>
      <p>${drink.preparation}</p>
    </div>
  
  `
  document.querySelector('#drink-collection').appendChild(card)
}

let drinkList = []

function getDrinks(){
  fetch('http://localhost:3000/cocktails')
  .then(res => res.json())
  .then(drinks => drinks.forEach(drink => renderDrinks(drink)))
  .catch(error => console.log(error))

}


function handleSubmit(e){
  e.preventDefault()

  let drinkObj = {

    image:e.target.querySelector("#inputDrinkImg").value,
    name:e.target.querySelector("#inputDrink").value,
    preparation:e.target.querySelector("#recipe").value
  }
  renderDrinks(drinkObj)
}

