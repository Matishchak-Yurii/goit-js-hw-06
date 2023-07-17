const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl);

const elements = ingredients.map(el => {
  const listEl = document.createElement('li')
  listEl.classList.add('item');
  listEl.textContent = el;
  return listEl
})

ingredientsEl.append(...elements);
 






