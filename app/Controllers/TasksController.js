import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
    createTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        const rawTask = {
          listId,
          name: form.name.value,
          checked: false
        
        }
        tasksService.createTask(rawTask)
        form.reset()
      }
    
      async deleteTask(id) {
        if (await Pop.confirm()) {
         tasksService.deleteTask(id)
        }
      }

      checked(id) {
          console.log("hello world");
          tasksService.checked(id)
      }
}