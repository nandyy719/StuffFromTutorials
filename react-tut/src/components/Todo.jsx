import {FaTimes} from 'react-icons/fa'

export default function Todo({todo, onDelete, onToggle}) {
  return (
    <div className = 'todo' onDoubleClick = {() => onToggle(todo.id)}  style = {todo.reminder ? reminderStyle : {cursor: 'pointer'}}>
        <h3>
            {todo.text} <FaTimes style={deleteStyle} onClick = {() => onDelete(todo.id)}/>
        </h3>
        <p>{todo.day}</p>
    </div>
  )
}

const deleteStyle = {
    color: 'red',
    cursor: 'pointer'
}

const reminderStyle = {
    borderLeft: '3px solid red',
    cursor: 'pointer'
}