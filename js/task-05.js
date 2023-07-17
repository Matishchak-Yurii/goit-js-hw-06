const textInputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');
console.dir(outputNameEl);
textInputEl.addEventListener('input', oninputElsubmit)

function oninputElsubmit(event) {
    if (event.currentTarget.value) {
        outputNameEl.textContent = event.currentTarget.value;
        return
    };
    outputNameEl.textContent = "Anonymous";
}