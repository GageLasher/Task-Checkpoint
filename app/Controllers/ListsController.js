import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _drawList() {
    let template = ""
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
}

export class ListsController {
    constructor() {
        ProxyState.on("lists", _drawList)
        ProxyState.on("tasks", _drawList)
        ProxyState.on("lists", saveState)
        ProxyState.on("tasks", saveState)
        loadState()
    }
    createList() {
        window.event.preventDefault()
        let form = window.event.target
        const rawList = {
            name: form.name.value,
            color: form.color.value
        }
        listsService.createList(rawList)
        form.reset()
    }
    deleteList(id) {
        listsService.deleteList(id)
    }
}