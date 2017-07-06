import { PropTypes, Component } from 'react'

class ShowTodoList extends Component {

    render() {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                {state.todos.map((todos,i) => <p key={i} >{todos.title}</p>)}
            </div>
        )
    }
}
    ShowTodoList.contextTypes = {
        store: PropTypes.object
    }

export default ShowTodoList
