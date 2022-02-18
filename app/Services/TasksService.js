import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
createTask(rawTask) {
    const task = new Task(rawTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
}
deleteTask(id){
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
}
}


export const tasksService = new TasksService()