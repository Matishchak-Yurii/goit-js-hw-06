
const counterValueEl = document.querySelector('#value');

const deskBtn = document.querySelector("[data-action='decrement']");
const incrBtn = document.querySelector("[data-action='increment']");
console.dir(counterValueEl);

deskBtn.addEventListener('click', OnIncrement);

incrBtn.addEventListener('click', OnDecrement);

 let step = 0;

function OnDecrement(params) {
  step += 1;
   
    counterValueEl.textContent = String(step);
};

function OnIncrement(params) {
 step -= 1;

    counterValueEl.textContent =String(step);
};