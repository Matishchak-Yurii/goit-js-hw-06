
const bodyColorEl = document.querySelector('body');
console.log(bodyColorEl);
const colorChange =document.querySelector('.change-color')
console.log(colorChange);
const colorEl = document.querySelector('.color')
console.log(colorEl);

colorChange.addEventListener('click', getRandomHexColor);
colorChange.addEventListener('click', getRandomTextColor);

function getRandomHexColor(evt) {
return bodyColorEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

};
function getRandomTextColor(evt) {
 return  colorEl.textContent=`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

