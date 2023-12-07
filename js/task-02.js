const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.map(element => {
  var li = document.createElement("li");
      li.className = "finalBlock";
      li.innerHTML = element;
      document.getElementById("ingredients").appendChild(li);
    }
  )