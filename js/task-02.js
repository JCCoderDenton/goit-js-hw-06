const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listToHtml = document.getElementById('ingredients');
listToHtml.innerHTML = `${ingredients.map(element => `<li>${element}</li>`).join('')}`;