import "./sidebar.css";
import "./main.css";
import "./form.css";
import { EditProjectConstructor } from "./dom";

document.addEventListener("DOMContentLoaded", () => {
    const epc = new EditProjectConstructor();
    const content = document.getElementById("content");
    content.appendChild(epc.createForm());
});