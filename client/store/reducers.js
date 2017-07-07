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
        case C.REMOVE_TODO:
            return state.filter(
                c => c.id !== action.id
            )
        default :
            return state
    }
}
