
class EditProjectConstructor {
    constructor(title = "New Project", description = "Enter description...", dueDate = Date.now(), status = "Not started") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    createForm() {
        const projectForm = document.createElement("form");
        projectForm.id = "project-form";

        const titleInput = new TitleInput(this.title, "project");
        const descriptionInput = new DescriptionInput(this.description, "project");
        const dueDateInput = new DueDateInput(this.dueDate, "project");
        const statusInput = new StatusInput(this.status, "project");
       
      
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
        titleInput.id = `${descriptor}-title`;
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
        descriptionInput.id = `${descriptor}-description`;
        return descriptionInput;
    } 
}

class DueDateInput {
    constructor(dueDate, descriptor) {
        this.dueDate = dueDate;
        this.descriptor = descriptor;
    }

    createElement() {
       
    }
}