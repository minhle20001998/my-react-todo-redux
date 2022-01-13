import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getTodos } from '../redux/ducks/todos'
import TodoListItem from './TodoListItem'
import './TodoList.css'
export default function TodoList() {
    const ids = useSelector((state) => state.todos.map(todo => todo.id), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
        return {
        }
    }, [dispatch])


    return (
        <div>
            <h2>Todo List</h2>
            {ids.map(id => {
                return <TodoListItem key={id} id={id} />
            })}
        </div>
    )
}
