const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let list = document.querySelector('#ingredients');
let li;
ingredients.forEach(element => {li = document.createElement('li'),  li.textContent = element, li.className = "Item" ,list.appendChild(li)});
