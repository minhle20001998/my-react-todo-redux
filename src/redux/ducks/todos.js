export const GET_TODOS = 'GET_TODOS';
export const ADD_TODOS = 'ADD_TODOS';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const getTodos = () => {
    return {
        type: GET_TODOS
    }
}

export const addTodos = (todos) => {
    return {
        type: ADD_TODOS,
        payload: todos
    }
}

export const completeTodos = (id, completed) => {
    return {
        type: COMPLETE_TODO,
        payload: { id, completed }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

const initState = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
]

export default function todosReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODOS:
            return action.payload
        case COMPLETE_TODO:
            return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo)
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return [...state]
    }
}