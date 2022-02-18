import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {
    createList(rawList)  {
        const list = new List(rawList)
        ProxyState.lists = [...ProxyState.lists, list]
        
    }
    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    }
}

export const listsService = new ListsService()