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
  var h2 = document.querySelector('h2');
  h2.innerHTML = 'Your list <span id="notice">[click on the item to check]</span>';
}

function doneTodo(e) {
  var tgt = e.target;
  if (tgt.matches('.my-item')) {
    console.log(tgt.tagName,tgt.innerText)
    tgt.classList.toggle("done");
  }
}