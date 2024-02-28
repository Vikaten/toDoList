const heading = document.querySelector("#top");
const space = document.querySelector("#space");
const noticeButton = document.querySelector("#noticeButton");
const ul = document.querySelector("ul");
let toDoList = [];

if (localStorage.getItem("todo")) {
    toDoList = JSON.parse(localStorage.getItem("todo"));
    createNewDoing();
} 

noticeButton.addEventListener("click", function () {
    let toDo = {
    doing: space.value,
    checkbox: false,
    };
    if (toDo.doing.length > 0) {
      toDoList.push(toDo);
      createNewDoing();
    }
    else {
      alert("Ваша строка должна пустая. Заполните ее, пожалуйста!");
    }
  console.log(toDoList);
  localStorage.setItem("todo", JSON.stringify(toDoList));
});

// новая строка списка
function createNewDoing() {
  let pr = "";
  toDoList.forEach((el, index) => {
    pr += `
        <li id = 'item${index}'>
        <div class = 'checkText'>
            <input type = 'checkbox' class = 'checkbox'>
            <label class = 'li'>${el.doing}</label>
        </div>
        </li>`;
    space.value = "";
    ul.innerHTML = pr;
  });
}
