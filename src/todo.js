
class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }

    set priority(value) {
        const priorities = ["low", "medium", "high"];
        if (priorities.includes(value)) {
            this.priority = value;
        }
    }

    set status(value) {
        const statuses = ["not started", "in progress", "completed"];
        if (statuses.includes(value)) {
            this.status = value;
        }
    }
}