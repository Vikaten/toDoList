const heading = document.querySelector("#top");
const space = document.querySelector("#space");
const noticeButton = document.querySelector("#noticeButton");
const ul = document.querySelector("ul");
const container = document.querySelector("#container");
let toDoList = [];

if (localStorage.getItem("todo")) {
    toDoList = JSON.parse(localStorage.getItem("todo"));
    createNewDoing();
} 

// проверка ну пустую строку в графе
noticeButton.addEventListener("click", function () {
    let toDo = {
      doing: space.value,
      checkbox: false,
      delete: false
    };
    if (toDo.doing.length > 0) {
      toDoList.push(toDo);
      createNewDoing();
    }
    else {
      alert("Ваша строка должна пустая. Заполните ее, пожалуйста!");
    }
  localStorage.setItem("todo", JSON.stringify(toDoList));
});

// новая строка списка
function createNewDoing() { 
  let pr = ""; 
  toDoList.forEach((el, index) => { 
    pr += ` 
        <li id = 'item${index}' class = 'li_item'> 
        <div class = 'checkTrash'> 
          <div class = 'checkText'> 
              <input type = 'checkbox' class = 'checkbox'  id = 'item${index}' ${el.checkbox ? 'checked' : ''}> 
          </div> 
          <label for = 'item${index}'>
          ${el.doing}
          </label> 
          <div>
            <img src = 'trash.svg' class = 'trash'> 
          </div>
        </div> 
        </li>`; 
    space.value = ""; 
    ul.innerHTML = pr; 
  }); 
}

// сохранение состояния checkbox 
container.addEventListener('change', function (e) {
  let targetTag = e.target.getAttribute('id');
  toDoList.forEach((el, index) => {
    if ('item' + toDoList.indexOf(el) == targetTag) {
    el.checkbox = !el.checkbox;
      localStorage.setItem("todo", JSON.stringify(toDoList));
    }
  })
})

// удаление блока
const deleteButton = document.querySelectorAll('.trash');
deleteButton.forEach(el => {
  el.addEventListener('click', function (e) {
    let checkTrash = e.target.closest('.checkTrash');
    const indexToRemove = parseInt(checkTrash.dataset.index);
    toDoList.splice(indexToRemove, 1);
    checkTrash.remove()
  localStorage.setItem('todo', JSON.stringify(toDoList))
  })
})
