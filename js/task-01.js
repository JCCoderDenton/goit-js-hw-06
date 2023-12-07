
const categories = Array.from(document.querySelectorAll('ul#categories'));   // Реалізація через foreach

categories.forEach(countingElements);
    function countingElements() {
        let item = 0;
        const nubbersElements = [];
        const categorysArray = [];
        categories[0].childNodes.forEach(function(element, i) {
            if (categories[0].childNodes[i].className == "item"){
                item++;
                let elementNumber = 0;
                let categorys = "";
                categories[0].childNodes[i].childNodes.forEach(function(element, k) {
                    if (categories[0].childNodes[i].childNodes[k].localName == "ul" ){
                        categories[0].childNodes[i].childNodes[k].childNodes.forEach(function(element, j) {
                            if (categories[0].childNodes[i].childNodes[k].childNodes[j].localName == "li" ){
                                elementNumber++;
                            }                            
                        });
                    }
                    if (categories[0].childNodes[i].childNodes[k].localName == "h2" ){
                        categorys = categories[0].childNodes[i].childNodes[k].innerText;
                    }
                });
                
                categorysArray.push(categorys);
                nubbersElements.push(elementNumber);
            }
        });
        console.log("Number of categories: ",item);
        nubbersElements.forEach(function(element,f) {
            console.log("Category: ",categorysArray[f]);
            console.log("Elements: ",nubbersElements[f]);
        });
    }




/*
const categories = Array.from(document.querySelectorAll('ul#categories')); // Реалізація через for

categories.forEach(countingElements);
    function countingElements() {
        let item = 0;
        const nubbersElements = [];
        const categorysArray = [];
        for (let i=0; i < categories[0].childNodes.length; i++){
            if (categories[0].childNodes[i].className == "item"){
                item++;
                let element = 0;
                let categorys = "";
                for (let k=0; k < categories[0].childNodes[i].childNodes.length; k++){
                    if (categories[0].childNodes[i].childNodes[k].localName == "ul" ){
                        for (let j=0; j < categories[0].childNodes[i].childNodes[k].childNodes.length; j++){
                            if (categories[0].childNodes[i].childNodes[k].childNodes[j].localName == "li" ){
                                element++;
                            }
                        }
                    }
                    if (categories[0].childNodes[i].childNodes[k].localName == "h2" ){
                        categorys = categories[0].childNodes[i].childNodes[k].innerText;
                    }
                }
                categorysArray.push(categorys);
                nubbersElements.push(element);
            }
        }
    console.log("Number of categories: ",item);
    for (let f = 0; f < categorysArray.length; f++){
        console.log("Category: ",categorysArray[f]);
        console.log("Elements: ",nubbersElements[f]);
    }
}
*/
/*
console.log("Number of categories: ",categories[0].childElementCount);      // Реалізація без циклів
console.log("Category: ",categories[0].childNodes[1].childNodes[1].innerHTML);
console.log("Elements: ",categories[0].childNodes[1].childNodes[3].childElementCount);
console.log("Category: ",categories[0].childNodes[3].childNodes[1].innerHTML);
console.log("Elements: ",categories[0].childNodes[3].childNodes[3].childElementCount);
console.log("Category: ",categories[0].childNodes[5].childNodes[1].innerHTML);
console.log("Elements: ",categories[0].childNodes[5].childNodes[3].childElementCount);
*/