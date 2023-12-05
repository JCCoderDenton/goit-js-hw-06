const categories = Array.from(document.querySelectorAll('ul#categories>li>ul'));
const listAnimal = Array.from(document.querySelector("li.item:nth-child(1)").querySelectorAll("ul>li"));
const listProduct = Array.from(document.querySelector("li.item:nth-child(2)").querySelectorAll("ul>li"));
const listTech = Array.from(document.querySelector("li.item:nth-child(3)").querySelectorAll("ul>li"));
var i = 0;
let categoriesNumber = countingElements(categories,0,"ul");
let animalsNumber = countingElements(listAnimal,0,"li");
let productNumber = countingElements(listProduct,0,"li");
let techNumber = countingElements(listTech,0,"li");

function countingElements(elements,Number,tag) {
    elements.forEach(tag =>{return Number += 1});
    const header = document.getElementsByClassName("item")[i].childNodes[1].innerHTML;
    if (tag == "ul"){
        console.log("Number of categories: ",Number);
    }
    else{
        console.log("Category test: ",header);
        console.log("Elements test: ",Number);
        i++;
    }
}