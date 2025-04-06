import "./sidebar.css";
import "./main.css";
import "./form.css";
import { EditProjectConstructor, EditTaskConstructor } from "./dom";
import { Project, Task, ToDoList, ProjectList } from "./structures";

const projectList = new ProjectList();
const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");

const taskList = new ProjectList();

//adds functionality to initially created HTML element, that's why it's not in other js files//
addProject.addEventListener("click", () => {
    const editProject = new EditProjectConstructor();
    const form = editProject.createNewProjectForm();
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(form);
    content.appendChild(editProject.createProjectTaskList());
});

addTask.addEventListener("click", () => {
    const editTask = new EditTaskConstructor();
    const form = editTask.createNewTaskForm();
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(form);
});

export { projectList, taskList };