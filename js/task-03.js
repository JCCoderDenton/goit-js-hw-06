const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
var frame = document.querySelector('.gallery');
var string = "";
function animalFunction() {
  var i = 2;
  images.forEach(element => {
    string = string + `<li><img width="300" src="${images[i].url}" alt="${images[i].alt}"></li>`;
    i--   
  });
  frame.insertAdjacentHTML("afterbegin", string);
}
animalFunction()
