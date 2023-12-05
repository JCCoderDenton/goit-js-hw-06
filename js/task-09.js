const btnColor = document.querySelector('button[type="button"]').addEventListener("click", changeColor);

function changeColor(){
  var backColor = getRandomHexColor();
  const colorText = document.getElementsByClassName("color")[0];
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  document.body.style.backgroundColor = backColor;
  colorText.textContent = backColor;
  console.log(colorText);
  console.log(colorText);
}