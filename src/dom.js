
import { projectList } from "./index";
import { Project, Task, TodoList, ProjectList } from "./structures";

export class EditProjectConstructor {
    constructor(title = "New Project", description = "Enter description...", dueDate = Date.now(), status = "Not started") {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }

    createNewProjectForm() {
        const projectForm = this.createForm();

        projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const projectTitle = document.getElementById("project-title").value;
            const projectDescription = document.getElementById("project-description").value;
            const projectDueDate = new Date(`${document.getElementById("project-month").value}/${document.getElementById("project-day").value}/${document.getElementById("project-year").value} ${document.getElementById("project-hours").value}:${document.getElementById("project-minutes").value}`);
            const projectStatus = document.getElementById("project-status").value;
            const project = new Project(projectTitle, projectDescription, projectDueDate, projectStatus);
            projectList.add(project);
            Sidebar.updateProjects();
        });

        return projectForm;
    }

    createEditProjectForm(project) {
        const projectForm = this.createForm();

        projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const projectTitle = document.getElementById("project-title").value;
            const projectDescription = document.getElementById("project-description").value;
            const projectDueDate = new Date(`${document.getElementById("project-month").value}/${document.getElementById("project-day").value}/${document.getElementById("project-year").value} ${document.getElementById("project-hours").value}:${document.getElementById("project-minutes").value}`);
            const projectStatus = document.getElementById("project-status").value;
            project.title = projectTitle;
            project.description = projectDescription;
            project.dueDate = projectDueDate;
            project.status = projectStatus;

            Sidebar.updateProjects();
           
        });
        return projectForm;
    }


    createForm() {
        const projectForm = document.createElement("form");
        projectForm.id = "project-form";

        const titleInput = new TitleInput(this.title, "project");
        const descriptionInput = new DescriptionInput(this.description, "project");
        const dueDateInput = new DueDateInput(this.dueDate, "project");
        const statusInput = new StatusInput(this.status, "project");

        projectForm.appendChild(titleInput.createElement());
        projectForm.appendChild(descriptionInput.createElement());
        projectForm.appendChild(dueDateInput.createElement());
        projectForm.appendChild(statusInput.createElement());

        const submitButton = new SubmitButton("project");
        projectForm.appendChild(submitButton.createElement());

        
    

        return projectForm;
    }

}


class EditTaskConstructor {
    constructor(title = "New Task", description = "Enter description...", priority = "Low", status = "Not started", project="None") {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.project = project;
    }
}

class Sidebar {
    static updateProjects() {
        const projectListDiv = document.getElementById("project-list");
        projectListDiv.innerHTML = "";
        projectList.data.forEach(project => {
            const spc = new SidebarProjectCard(project);
            projectListDiv.appendChild(spc.createElement());
        });
    }
}

class SidebarProjectCard {
    constructor(project) {
        this.project = project;
    }

    createElement() {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        const projectTitle = document.createElement("div");
        projectTitle.textContent = this.project.title;
        projectCard.appendChild(projectTitle);

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "project-card-button-div";

        const editButton = new EditButton(this.project);
        buttonDiv.appendChild(editButton.createElement());
        
        const deleteButton = new DeleteButton(this.project);
        buttonDiv.appendChild(deleteButton.createElement());

        projectCard.appendChild(buttonDiv);


        return projectCard;
    }
}

class EditButton {
    constructor(project) {
        this.project = project;
    }

    createElement() {
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "project-card-button";
        editButton.addEventListener("click", () => {
            const epc = new EditProjectConstructor(this.project.title, this.project.description, this.project.dueDate, this.project.status);
            const content = document.getElementById("content");
            content.innerHTML = "";
            content.appendChild(epc.createEditProjectForm(this.project));
        });
        return editButton;
    }
}

class DeleteButton {
    constructor(project) {
        this.project = project;
    }

    createElement() {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "project-card-button";
        deleteButton.addEventListener("click", () => {
            projectList.remove(this.project);
            const projectListDiv = document.getElementById("project-list");
            projectListDiv.innerHTML = "";
            projectList.data.forEach(project => {
                const spc = new SidebarProjectCard(project);
                projectListDiv.appendChild(spc.createElement());
            });
        });
        return deleteButton;
    }
}

class TitleInput {
    constructor(title, descriptor) {
        this.title = title;
        this.descriptor = descriptor;
    }

    createElement() {
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.value = this.title;
        titleInput.textContent = this.title;
        titleInput.id = `${this.descriptor}-title`;
        titleInput.className = "title-input";
        titleInput.required = true;
        return titleInput;
    }
}

class DescriptionInput {
    constructor(description, descriptor) {
        this.description = description;
        this.descriptor = descriptor;
    }

    createElement() {
        const descriptionInput = document.createElement("textarea");
        descriptionInput.value = this.description;
        descriptionInput.textContent = this.description;
        descriptionInput.className = "description-input";
        descriptionInput.id = `${this.descriptor}-description`;
        return descriptionInput;
    } 
}

class DueDateInput {
    constructor(dueDate, descriptor) {
        this.dueDate = dueDate;
        this.descriptor = descriptor;
    }

    createElement() {
       const dueDateDiv = document.createElement("div");
        dueDateDiv.className = "due-date-input-container";

        const timeInput = document.createElement("div");
        timeInput.className = "time-input-container";

        const hoursInput = document.createElement("input");
        hoursInput.type = "text";
        if (this.dueDate.getHours() < 10) {
            hoursInput.value = `0${this.dueDate.getHours()}`;
            hoursInput.textContent = `0${this.dueDate.getHours()}`;
        }
        else {
            hoursInput.value = this.dueDate.getHours();
            hoursInput.textContent = this.dueDate.getHours();
        }
        hoursInput.className = "time-input";
        hoursInput.id = `${this.descriptor}-hours`;

        const colon = document.createElement("span");
        colon.textContent = ":";
        colon.className = "colon";

        const minutesInput = document.createElement("input");
        minutesInput.type = "text";
        minutesInput.textContent = this.dueDate.getMinutes();
        minutesInput.value = this.dueDate.getMinutes();
        minutesInput.className = "time-input";
        minutesInput.id = `${this.descriptor}-minutes`;

        timeInput.appendChild(hoursInput);
        timeInput.appendChild(colon);
        timeInput.appendChild(minutesInput);
        dueDateDiv.appendChild(timeInput);

        const monthDayYearDiv = document.createElement("div");
        monthDayYearDiv.className = "month-day-year-input-container";

        const monthInput = document.createElement("input");
        monthInput.type = "text";
        monthInput.textContent = this.dueDate.getMonth() + 1;
        monthInput.value = this.dueDate.getMonth() + 1;
        monthInput.className = "month-day-input";
        monthInput.id = `${this.descriptor}-month`;

        const dayInput = document.createElement("input");
        dayInput.type = "text";
        dayInput.textContent = this.dueDate.getDate();
        dayInput.value = this.dueDate.getDate();
        dayInput.className = "month-day-input";
        dayInput.id = `${this.descriptor}-day`;

        const yearInput = document.createElement("input");
        yearInput.type = "text";
        yearInput.textContent = this.dueDate.getFullYear();
        yearInput.value = this.dueDate.getFullYear();
        yearInput.className = "year-input";
        yearInput.id = `${this.descriptor}-year`;

        const slash = document.createElement("span");
        slash.textContent = "/";
        slash.className = "slash";
        const slash2 = document.createElement("span");
        slash2.textContent = "/";
        slash2.className = "slash";

        monthDayYearDiv.appendChild(monthInput);
        monthDayYearDiv.appendChild(slash);
        monthDayYearDiv.appendChild(dayInput);
        monthDayYearDiv.appendChild(slash2);
        monthDayYearDiv.appendChild(yearInput);
        dueDateDiv.appendChild(monthDayYearDiv);

        return dueDateDiv;
    }
}

class StatusInput {
    constructor(status, descriptor) {
        this.status = status;
        this.descriptor = descriptor;
    }

    createElement() {
        const statusInput = document.createElement("select");
        statusInput.id = `${this.descriptor}-status`;
        statusInput.className = "status-input";

        const statuses = ["Not started", "In progress", "Completed"];
        statuses.forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            if (status === this.status) {
                option.selected = true;
            }
            statusInput.appendChild(option);
        });

        return statusInput;
    }
}

class SubmitButton {
    constructor(descriptor) {
        this.descriptor = descriptor;
    }
    createElement() {
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.id = `${this.descriptor}-submit`;
        submitButton.textContent = "Submit";
        submitButton.className = "submit-button";
        return submitButton;
    }
}