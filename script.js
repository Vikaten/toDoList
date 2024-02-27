const heading = document.querySelector('#top');
const space = document.querySelector('#space');
const noticeButton = document.querySelector('#noticeButton')
const ul = document.querySelector('ul');
let toDoList = []

if(localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    createNewDoing()
}

noticeButton.addEventListener('click', function() {
    toDo = {
        doing: space.value,
        checkbox: false
    }
    toDoList.push(toDo);
    if (toDo.doing.length > 0) {
        createNewDoing();
    }
    else {
        alert('Ваша срока должна пустая. Заполните ее!')
    }
    console.log(toDoList);
    localStorage.setItem('todo', JSON.stringify(toDoList));
})

function createNewDoing() {
    let pr = '';
    toDoList.forEach((el, index) => {
        pr += `
        <li id = 'item${index}'>
        <div class = 'checkText'>
            <input type = 'checkbox' class = 'checkbox'>
            <label class = 'li'>${el.doing}</label>
        </div>
        </li>`;
        space.value = '';
        ul.innerHTML = pr
    })
}
