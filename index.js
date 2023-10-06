"use strict";
const input = document.getElementById("input");
const taskList = document.getElementById("tasks");
const addtask = document.getElementById("addtaskbtn");
let newArray = [];
const addTask = (edit) => {
    if (edit) {
        const myTask = newArray.find((item) => item.id === idNum);
        myTask.task = input.value;
        editMood = false;
        idNum = null;
        addtask.innerText = "Add Task";
    }
    else {
        const newTask = {
            task: input.value,
            id: crypto.randomUUID(),
        };
        newArray.push(newTask);
    }
    render();
    input.value = "";
};
addtask.addEventListener("click", () => addTask(editMood));
const render = () => {
    taskList.innerHTML = "";
    newArray.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("divtask");
        const task = document.createElement("span");
        task.innerText = element.task;
        div.appendChild(task);
        const divbtntask = document.createElement("div");
        divbtntask.classList.add("btntask");
        const editbtn = document.createElement("button");
        editbtn.classList.add("edit");
        editbtn.innerText = "edit";
        editbtn.addEventListener("click", () => editFunc(element));
        const deletebtn = document.createElement("button");
        deletebtn.setAttribute("class", "delet");
        deletebtn.innerText = "delete";
        deletebtn.addEventListener("click", () => deleteFunc(element.id));
        divbtntask.appendChild(editbtn);
        divbtntask.appendChild(deletebtn);
        div.appendChild(divbtntask);
        taskList.appendChild(div);
    });
};
const deleteFunc = (id) => {
    newArray = newArray.filter((item) => item.id !== id);
    render();
};
let editMood = false;
let idNum = null;
const editFunc = (array) => {
    input.value = array.task;
    addtask.innerText = "Edit";
    editMood = true;
    idNum = array.id;
};
