import {Item} from "../model/Item.js"
import {Todos} from "../model/Todos.js"

export class TodoController {

    addItem(value) {
        const todos = new Todos()

        const item = new Item(value)
        todos.addItem(item)
    }

    editItem(id, value) {
        const todos = new Todos()

        todos.editItem(id, value)
    }

    cancelEditing(id) {
        const todos = new Todos()

        todos.cancelEditing(id)
    }

}