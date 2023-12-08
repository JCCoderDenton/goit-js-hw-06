const list = document.getElementById("ingredients");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsCode = ingredients.map((element, i) => {
  let li = document.createElement('li');
  li.innerText = element;
  li.className= "item";
  return li;
});

list.append(...ingredientsCode);