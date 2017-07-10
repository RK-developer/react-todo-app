import C from './constants.js'
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'

export const addTodoPreFetch = (title) => ({
        type: C.ADD_TODO,
        id: v4(),
        title
    })

export const addTodo = (title) => {
    return dispatch => {
        dispatch(addTodoPreFetch(title))
        return fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ title: title}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            response => response,
            error => console.log('An error occured.', error)
        ).then(
            response => dispatch(fetchTodos())
        )
    }
}

export const removeTodoPreFetch = (id) => ({
        type: C.REMOVE_TODO,
        id: id
    })

export const removeTodo = (id) => {
    return dispatch => {
        dispatch(removeTodoPreFetch(id))
        return fetch('/api/todos/' + id, {
            method: 'DELETE'
        })
        .then(
            response => dispatch(fetchTodos()),
            error => console.log('An error occured.', error)
        )
    }
}

export const editTodoPreFetch = (id, title) => ({
        type: C.EDIT_TODO,
        id: id,
        title: title
    })

export const editTodo = (id, title) => {
    return dispatch => {
        dispatch(editTodoPreFetch(id, title))
        return fetch('/api/todos/' + id, {
            method: 'PUT',
            body: JSON.stringify({ title: title, id: id}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            response => {
                dispatch(fetchTodos())
            },
            error => console.log('An error occured.', error)
        )
    }
}

export const fetchTodos = () => {
    return dispatch => {
        return fetch('/api/todos')
            .then(
                response => {
                    return response.json()
                },
                error => console.log('An error occured.', error)
            )
            .then(
                json => dispatch(setTodos(json))
                //json => console.log(json)
            )
    }
}

export const setTodos = (todos) => ({
    type: C.SET_TODOS,
    todos: todos
})
