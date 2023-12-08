
const categories = Array.from(document.querySelectorAll('li.item'));   

console.log("Number of categories: ",categories.length);  

categories.forEach(function(element, i) {
    categories[i].childNodes.forEach(function(element, k) {
        let numberElements = 0;
        if (categories[i].childNodes[k].localName == "h2" ){
            console.log("Category: ",categories[i].childNodes[k].innerText);  
        }
        if (categories[i].childNodes[k].localName == "ul" ){            
            categories[i].childNodes[k].childNodes.forEach(function(element, j) {
                if (categories[i].childNodes[k].childNodes[j].localName == "li" ){
                    numberElements++;  
                }
            });
            console.log("Elements: ",numberElements);
            //console.log("Elements: ",categories[i].childNodes[k].childElementCount);    //Получення кількості childNodes через DOM
        }
    });
});