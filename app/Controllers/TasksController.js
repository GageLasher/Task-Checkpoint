import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
    createTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        console.log("i have clicked the task button", listId);
        const rawTask = {
          listId,
          name: form.name.value
        }
        console.log(rawTask)
        tasksService.createTask(rawTask)
        form.reset()
      }
    
      async deleteTask(id) {
        if (await Pop.confirm()) {
         tasksService.deleteTask(id)
        }
      }
}