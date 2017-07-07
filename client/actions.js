import C from './constants.js'
import { v4 } from 'uuid'

export const addTodo = (title) => ({
        type: C.ADD_TODO,
        id: v4(),
        title
    })

export const removeTodo = (id) => ({
        type: C.REMOVE_TODO,
        id: id
    })
