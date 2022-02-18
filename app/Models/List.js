import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(data) {
        this.id = this.id || generateId()
        this.name = data.name
        this.color = data.color
    }
    get Template() {
        return `
        <div class="col-md-4">
        <div class="card">
          <div class="text-center bg-secondary">
          <h5 class="d-flex justify-content-between">${this.name} 0/${this.Total}
            <i class="mdi mdi-delete selectable" title="delete list" onclick="app.listsController.deleteList('${this.id}')" ></i>
          </h5>
        </div>
        <div class="justify-content-start">
        ${this.TaskTemplate}
          </div>
          <form id="taskform" class="px-3 pb-2" onsubmit="app.tasksController.createTask('${this.id}')">
            <div class="input-group">
              <input required minlength="3" maxlength="50" type="text" class="form-control" placeholder="Add Task..." aria-label="task"
                aria-describedby="task" id="name">
              <button class="btn btn-outline-secondary" type="submit" form="taskform" value="Submit"><i
                  class="mdi mdi-plus"></i></button>
            </div>
          </form>
        </div>
      </div>
        `
    }
    get TaskTemplate() {
        let template = ''
        const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
        myTasks.forEach(t => template += t.Template)
        return template
      }
      get Total() {
          let totalTasks = 0
          const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
          totalTasks += myTasks.length
          return totalTasks
      }
}