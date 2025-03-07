
class Project {
    constructor(title, description, dueDate, progress) {
        this.title = title;
        this.description = description;
        this._dueDate = dueDate;
        this._progress = progress;
        this.contents = [];
    }

    set progress(value) {
        const statuses = ["Not started", "In progress", "Completed"];
        if (statuses.includes(value)) {
            this._progress = value;
        }
    }

    
}


class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this.notes = notes;
        this._status = status;
    }

    set priority(value) {
        const priorities = ["low", "medium", "high"];
        if (priorities.includes(value)) {
            this._priority = value;
        }
    }

    set status(value) {
        const statuses = ["Not started", "In progress", "Completed"];
        if (statuses.includes(value)) {
            this._status = value;
        }
    }
}