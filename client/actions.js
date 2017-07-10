import C from './constants.js'
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'

export const addTodo = (title) => ({
        type: C.ADD_TODO,
        id: v4(),
        title
    })

export const removeTodo = (id) => ({
        type: C.REMOVE_TODO,
        id: id
    })

export const editTodo = (id, title) => ({
        type: C.EDIT_TODO,
        id: id,
        title: title
    })

export const fetchTodos = () => {
    return dispatch => {
        //dispatch()
        return fetch('/api/todos')
            .then(
                response => response.json()
            )
            .then(
                json => dispatch(setTodos(json.todos))
                //json => console.log(json)
            )
    }
}

export const setTodos = (todos) => ({
    type: C.SET_TODOS,
    todos: todos
})
