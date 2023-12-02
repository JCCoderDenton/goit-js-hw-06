const categories = Array.from(document.querySelectorAll('ul#categories>li>ul'));
let  animalText = document.getElementsByClassName("item")[0].childNodes[1].innerHTML;
const listAnimal = Array.from(document.querySelector("li.item:nth-child(1)").querySelectorAll("ul>li"));
let  productText = document.getElementsByClassName("item")[1].childNodes[1].innerHTML;
const listProduct = Array.from(document.querySelector("li.item:nth-child(2)").querySelectorAll("ul>li"));
let  techText = document.getElementsByClassName("item")[2].childNodes[1].innerHTML;
const listTech = Array.from(document.querySelector("li.item:nth-child(3)").querySelectorAll("ul>li"));

let categoriesNumber = countingElements(categories,0,"ul");
let animalsNumber = countingElements(listAnimal,0,"li");
let productNumber = countingElements(listProduct,0,"li");
let techNumber = countingElements(listTech,0,"li");


function countingElements(elements,Number,tag) {
    elements.forEach(tag =>{return Number += 1});
    return Number;
}

console.log("Number of categories: ",categoriesNumber);
console.log("Category: ",animalText);
console.log("Elements: ",animalsNumber);
console.log("Category: ",productText);
console.log("Elements: ",productNumber);
console.log("Category: ",techText);
console.log("Elements: ",techNumber);