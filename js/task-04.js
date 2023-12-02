let counterValue = 0;
document.getElementById("myBtnMin").addEventListener("click", function(){ plusMinus( -1) });
document.getElementById("myBtnPlus").addEventListener("click", function(){ plusMinus( 1) });

function plusMinus(y) {
    counterValue = counterValue + y;
    document.getElementById("value").innerHTML = counterValue;
  }
