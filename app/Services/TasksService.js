import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

class TasksService {
createTask(rawTask) {
    const task = new Task(rawTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
}
deleteTask(id){
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
}
checked(id){
    let task = ProxyState.tasks.find(t => t.id == id)

    if (task.checked == false) {  
        task.checked = true
    } else {
        task.checked = false
    }
    
   
    
    console.log(task);
    ProxyState.tasks = ProxyState.tasks

    
    
}
}


export const tasksService = new TasksService()