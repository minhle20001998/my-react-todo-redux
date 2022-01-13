import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodos, deleteTodo } from '../redux/ducks/todos'

export default function TodoListItem({ id }) {
    const todo = useSelector((state) => state.todos.find(todo => todo.id === id))
    const dispatch = useDispatch()

    const handleCheckboxChange = (e) => {
        dispatch(completeTodos(id, e.target.checked))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type='checkbox'
                defaultChecked={todo.completed}
                style={{ marginRight: '10px' }}
                onChange={handleCheckboxChange}
            />
            <p className={todo.completed ? 'completed' : 'undone'}>
                {todo.title}
            </p>
            <button disabled={todo.completed} style={{ marginLeft: '10px' }}>Edit</button>
            <button style={{ marginLeft: '10px' }} onClick={handleDelete}>Delete</button>
        </div>
    )
}
