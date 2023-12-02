

const input = document.getElementById('name-input');
const log = document.getElementById("name-output");

input.addEventListener("input", updateValue);

function updateValue(e) {
    if (e.target.value == "" || e.target.value == null || e.target.value == " "){
        log.textContent = "Anonymous";
    }

    else {
        log.textContent = e.target.value;        
    }   

}