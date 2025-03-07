
export default class Todo {
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
        const statuses = ["not started", "in progress", "completed"];
        if (statuses.includes(value)) {
            this._status = value;
        }
    }
}