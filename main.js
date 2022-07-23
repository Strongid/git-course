var form = document.createElement('form');
var input = document.createElement('input');
var ul = document.createElement('ul');
ul.classList.add('list-group');
var li = document.createElement('li');
var btnGroup = document.createElement('div');
var delBtn = document.createElement('button');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
function createElements() {
  let smallCont = document.querySelector('.small-cont');
  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = ('Введите название нового дела');
  smallCont.append(form);
  form.append(input);
  smallCont.append(ul);
}
createElements();
function createLi(text) {
  let li = document.createElement('li');
  let btnGroup = document.createElement('div');
  const delBtn = document.createElement('button');
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  delBtn.classList.add('btn', 'btn-danger');
  delBtn.style.cssText = 'z-index: 5;';
  btnGroup.classList.add('btn-group', 'btn-group-sm')
  delBtn.textContent = 'Удалить';
  li.textContent = text;
  btnGroup.append(delBtn);
  li.append(btnGroup);
  ul.appendChild(li);

  delBtn.addEventListener('click', function () {
    if (confirm('Вы уверены?')) {
      this.closest('li').remove();
    }
  })
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!input.value) {
    return
  };
  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  createLi(input.value);
  input.value = '';
})
data.forEach(item => {
  createLi(item)
})