import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



const list1 = new List({
  name : "Shopping",

})
const task1 = new Task({
  name : "Buy Tomatoes",

})

class AppState extends EventEmitter {
lists = [list1]
tasks = [task1]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
