const todoinput = document.querySelector("#toDoInput");
const todolist = document.querySelector("#toDoList");
const addbutton = document.querySelector("#addButton");
const removebutton = document.querySelector("#removeButton");
const task = document.querySelectorAll(".task");

addbutton.addEventListener('click', () => {
    const taskcontainer = document.createElement('div')
    const newtask = document.createElement('li');
    const removeCurrentButton = document.createElement('button');
    const checkbox = document.createElement('input');

    taskcontainer.className = "taskcontainer";
    removeCurrentButton.className = "removeCurrentButton";
    removeCurrentButton.textContent = removebutton.value;
    newtask.textContent = todoinput.value;
    checkbox.type = "checkbox";

    taskcontainer.appendChild(newtask);
    taskcontainer.appendChild(removeCurrentButton);
    taskcontainer.appendChild(checkbox);
    todolist.appendChild(taskcontainer);
    taskcontainer.appendChild(removeCurrentButton);

    if (todoinput.value === "") {
        alert("Bitte gebe etwas im Textfeld ein!");
        todolist.removeChild(todolist.lastElementChild);
    }
    todoinput.value = "";

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newtask.style = "text-decoration: line-through";
        } else {
            newtask.style = "text-decoration: none";
        }
    });


    removeCurrentButton.addEventListener('click', () => {
        taskcontainer.remove(taskcontainer.lastChild);
    });
});

removebutton.addEventListener('click', () => {
    todolist.removeChild(todolist.lastElementChild);
});

