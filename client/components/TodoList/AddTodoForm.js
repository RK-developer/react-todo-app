import { PropTypes, Component } from 'react'
import { addTodo} from '../../actions'

class AddTodoForm extends Component {

    addTodo = () => {
        this.props.onAdd()
    }

    render () {
        const {store} = this.context
        const state = store.getState()
        return (
            <p onClick={()=>{ this.props.onAdd("on add") }}>
                Click Me to add todo
            </p>
        )
    }
}


AddTodoForm.contextTypes = {
    store: PropTypes.object
}

export default AddTodoForm
