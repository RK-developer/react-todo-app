import C from '../constants.js'

export const todos = (state={}, action) => {
    switch (action.type) {
        case C.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ]
        default :
            return state
    }
}
