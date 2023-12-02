const six = document.getElementById('validation-input');

six.addEventListener("blur", myBlurFunction);

function myBlurFunction(e) {
	if (six.dataset.length == e.target.value.length){
        event.target.classList.remove ("invalid");
        event.target.classList.add ("valid");
    }
  	else {
        event.target.classList.remove ("valid");
        event.target.classList.add ("invalid");  
    }
}