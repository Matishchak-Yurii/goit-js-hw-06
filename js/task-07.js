const inputEl = document.querySelector('#font-size-control')
const textStyleEl = document.querySelector('#text')

console.log(inputEl);
console.log(textStyleEl);
console.log(inputEl.value);
inputEl.addEventListener("input", () => {
  textStyleEl.style.fontSize =inputEl.value+'px';
});
