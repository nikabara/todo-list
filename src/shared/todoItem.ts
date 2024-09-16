export enum TodoCategory {
    Reminder,
    Work,
    Asap
}

Date.prototype.getDateFormatMDY = function() : string {
    const month = (this.getMonth()).toString().padStart(2, '0');
    const day = this.getDate().toString().padStart(2, '0');
    const year = this.getFullYear().toString().slice();
  
    return `${month}/${day}/${year}`;
}

export class TodoItem {
    constructor(text: string)
    constructor(text: string, description: string)
    constructor(text: string, description: string, todoType: TodoCategory)
    constructor(text: string, description: string, todoType: TodoCategory, dueDate: Date)
    constructor(public text?: string, public description?: string, public todoType?: TodoCategory, public dueDate?: Date) {
        this.text = text ?? "No message";
        this.description = description ?? "No message";
        this.todoType = todoType ?? TodoCategory.Reminder;
        this.dueDate = dueDate ?? new Date();
    }
}