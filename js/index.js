//first card
let firstCard = document.createElement('div');
firstCard.className = 'card';

let img1 = document.createElement('img');
img1.src = '../img/topimage.jpg';

let heading = document.createElement('h3');
heading.textContent = 'Food';

let firstPar = document.createElement('p');
firstPar.textContent = 'I love, love, love food!!!';

firstCard.appendChild(img1);
firstCard.appendChild(heading);
firstCard.appendChild(firstPar);

let container = document.querySelector('div.container');
container.appendChild(firstCard);

//second card
let secCard = document.createElement('div');
secCard.className = 'card';

let img2 = document.createElement('img');
img2.src = '../img/stack.jpg';

let heading2 = document.createElement('h3');
heading2.textContent = 'Books';

let secPar = document.createElement('p');
secPar.textContent = 'Sometimes, I need some me time. Curl up with my favorite book.';

secCard.appendChild(img2);
secCard.appendChild(heading2);
secCard.appendChild(secPar);

container.appendChild(secCard);

var styles = {
    "background-color": "rgba(0, 0, 0, 0.281)",
    "margin":"30px",
    "width":"250px",
    "text-align":"center",
    "color":"rgba(245, 222, 179, 0.998)",
    "text-shadow":"10px 2px 8px rgb(3, 3, 3)",
    "box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.8)",
    "border-radius": "20%"
}
var styles2 = {
    "flex-wrap": "wrap",
    "flex-basis": "content",
    "justify-content": "center",
    "margin-top": "100px",
}

var img = {
    "width": "150px",
    "padding-top": "10px",
    "border-radius": "50%"

}

var obj = document.getElementById('container');
Object.assign(obj.style, styles2);

Object.assign(firstCard.style, styles);
Object.assign(secCard.style, styles);

Object.assign(img1.style, img)
Object.assign(img2.style, img)