import { call, put } from "@redux-saga/core/effects";
import { getTodosFromAPI } from '../requests/todosRequests'
import { addTodos } from '../../ducks/todos'
export function* handleGetTodos(action) {
    try {
        const res = yield call(getTodosFromAPI);
        const { data } = res;
        yield put(addTodos(data))
    } catch (error) {
        console.log(error)
    }
}