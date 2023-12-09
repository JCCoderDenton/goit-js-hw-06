
const categories = Array.from(document.querySelectorAll('li.item'));   

console.log("Number of categories: ",categories.length);  

categories.forEach(function(element, k) {
    console.log("Category: ",categories[k].childNodes[1].innerText);  
    console.log("Elements: ",categories[k].childNodes[3].childElementCount);
});