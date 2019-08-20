var myForm = document.querySelector('.my-form');
var myList = document.querySelector('.my-list');

myForm.addEventListener('submit', addTodo);
myList.addEventListener('click', doneTodo);

function addTodo(e) {
  e.preventDefault();
  var input = this.input;
  var li = document.createElement('li');
  li.className = 'my-item';
  li.appendChild(document.createTextNode(input.value));
  myList.appendChild(li);
  input.value = '';
  input.select();
}

function doneTodo(e) {
  var tgt = e.target;
  if (tgt.matches('.my-item')) {
    console.log(tgt.tagName,tgt.innerText)
    tgt.classList.toggle("done");
  }
}