import "./sidebar.css";
import "./main.css";
import "./form.css";
import { EditProjectConstructor } from "./dom";
import { Project, Task, ToDoList, ProjectList } from "./structures";

const projectList = new ProjectList();
const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");

//adds functionality to initially created HTML element, that's why it's not in other js files//
addProject.addEventListener("click", () => {
    const editProject = new EditProjectConstructor();
    const form = editProject.createNewProjectForm();
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(form);
});

addTask.addEventListener("click", () => {
    const editTask = new EditTaskConstructor();
    const form = editTask.createForm();
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(form);
});

export { projectList };