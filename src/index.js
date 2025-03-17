import "./sidebar.css";
import "./main.css";
import "./form.css";
import { EditProjectConstructor } from "./dom";
import { Project, Task, ToDoList, ProjectList } from "./structures";

const projectList = new ProjectList();

document.addEventListener("DOMContentLoaded", () => {
    const epc = new EditProjectConstructor();
    const content = document.getElementById("content");
    content.appendChild(epc.createForm());
});

export { projectList };