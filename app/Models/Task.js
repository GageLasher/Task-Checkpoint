import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.listId = data.listId
    }
    get Template() {
        return `
        <div class="d-flex justify-content-between p-3">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="${this.name}">
          <label for="vehicle1">${this.name}</label>
          <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i>
          <br>
          </div>
        `
    }
}