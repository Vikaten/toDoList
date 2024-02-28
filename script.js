const heading = document.querySelector("#top");
const space = document.querySelector("#space");
const noticeButton = document.querySelector("#noticeButton");
const ul = document.querySelector("ul");
let container = document.querySelector("#container");
let toDoList = [];

if (localStorage.getItem("todo")) {
    toDoList = JSON.parse(localStorage.getItem("todo"));
    createNewDoing();
} 

// проверка ну пустую строку в графе
noticeButton.addEventListener("click", function () {
    let toDo = {
    doing: space.value,
    checkbox: false
    };
    if (toDo.doing.length > 0) {
      toDoList.push(toDo);
      createNewDoing();
    }
    else {
      alert("Ваша строка должна пустая. Заполните ее, пожалуйста!");
    }
  // console.log(toDoList);
  localStorage.setItem("todo", JSON.stringify(toDoList));
});

// новая строка списка
function createNewDoing() {
  let pr = "";
  toDoList.forEach((el, index) => {
    pr += `
        <li id = 'item${index}'>
        <div class = 'checkText'>
            <input type = 'checkbox' class = 'checkbox' id = 'item${index}'>
            <label for = 'item${index}'>${el.doing}</label>
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
    if (el.id === targetTag) {
      el.checkbox = !el.checkbox;
      localStorage.setItem("todo", JSON.stringify(toDoList));
    }
    // else {
    //   console.log(`item${index}` + ' ' + targetTag)
    // }
  });
});