const range = document.getElementById('font-size-control');
const fond = document.getElementById("text");

range.addEventListener('input', function() {
    fond.style.fontSize = range.value + 'px';
  }, false);