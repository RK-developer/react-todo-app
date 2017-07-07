import { PropTypes, Component } from 'react'
import ShowTodoItem from './ShowTodoItem'

class ShowTodoList extends Component {

    render() {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                {state.todos.map((todo,i) =>
                    <ShowTodoItem key={i}
                                  title={todo.title}
                                  onRemove={()=>this.props.onRemove(todo.id)}>
                    </ShowTodoItem>
                )}
            </div>
        )
    }
}

ShowTodoList.contextTypes = {
    store: PropTypes.object
}

export default ShowTodoList
