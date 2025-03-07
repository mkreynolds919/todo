
import { format } from "date-fns";

class Project {
    constructor(title, description, dueDate, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.contents = [];
    }

    set status(value) {
        if (StatusValidator.validate(value)) {
            this._status = value;
        }
    }

    set dueDate(value) {
        if (DueDateValidator.validate(value)) {
            this._dueDate = value;
        }
    }

    get status() {
        return this._status;
    }

    get dueDate() {
        return DueDateFormatter.formatDueDate(this._dueDate);
    }
}

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
        if (PriorityValidator.validate(value)) {
            this._priority = value;
        }
    }

    set status(value) {
        if (StatusValidator.validate(value)) {
            this._status = value;
        }
    }

    set dueDate(value) {
        if (DueDateValidator.validate(value)) {
            this._dueDate = value;
        }
    }

    get priority() {
        return this._priority;
    }
    
    get status() {
        return this._status;
    }
    
    get dueDate() {
        return DueDateFormatter.formatDueDate(this._dueDate);
    }
}

class PriorityValidator {
    static validate(value) {
        const priorities = ["low", "medium", "high"];
        if (priorities.includes(value)) {
            return true;
        } else {
            return false;
        }
    }
}

class StatusValidator {
    static validate(value) {
        const statuses = ["Not started", "In progress", "Completed"];
        if (statuses.includes(value)) {
            return true;
        } else {
            return false;
        }
    }
}

class DueDateValidator {
    static validate(value) {
        if (value instanceof Date && !isNaN(value)) {
            return true;
        }
    }
}

class DueDateFormatter {
    static formatDueDate(value) {
        return format(value, "MM/dd/yyyy");
    }
}

