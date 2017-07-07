const ShowTodoItem = ({onRemove=f=>f, title}) =>
    <div className="todo-item">
        <div className="todo-title">{title}</div>
        <div onClick={onRemove} className="todo-rm-btn">X</div>
    </div>

export default ShowTodoItem
