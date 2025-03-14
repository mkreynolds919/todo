
export class EditProjectConstructor {
    constructor(title = "New Project", description = "Enter description...", dueDate = Date.now(), status = "Not started") {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.status = status;
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

}

class SidebarAppendProject {

}

class SidebarAppendTask {

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
        hoursInput.type = "number";
        hoursInput.textContent = this.dueDate.getHours();
        hoursInput.value = this.dueDate.getHours();
        hoursInput.className = "time-input";
        hoursInput.id = `${this.descriptor}-hours`;

        const colon = document.createElement("span");
        colon.textContent = ":";
        colon.className = "colon";

        const minutesInput = document.createElement("input");
        minutesInput.type = "number";
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
        monthInput.type = "number";
        monthInput.textContent = this.dueDate.getMonth() + 1;
        monthInput.value = this.dueDate.getMonth() + 1;
        monthInput.className = "month-day-input";
        monthInput.id = `${this.descriptor}-month`;

        const dayInput = document.createElement("input");
        dayInput.type = "number";
        dayInput.textContent = this.dueDate.getDate();
        dayInput.value = this.dueDate.getDate();
        dayInput.className = "month-day-input";
        dayInput.id = `${this.descriptor}-day`;

        const yearInput = document.createElement("input");
        yearInput.type = "number";
        yearInput.textContent = this.dueDate.getFullYear();
        yearInput.value = this.dueDate.getFullYear();
        yearInput.className = "year-input";
        yearInput.id = `${this.descriptor}-year`;

        monthDayYearDiv.appendChild(monthInput);
        monthDayYearDiv.appendChild(dayInput);
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
        return submitButton;
    }
}