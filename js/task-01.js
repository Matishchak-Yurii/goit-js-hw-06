const catategoriesEl = document.querySelector('#categories')
const itemsEl=document.querySelector('.item')
console.log('Number of categories:', catategoriesEl.children.length);
const items = [...catategoriesEl.children]
items.forEach((item) => {

  console.log(`Category:${item.firstElementChild.textContent} \n Elements:${item.lastElementChild.children.length} `);
})


