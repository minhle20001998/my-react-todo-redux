import { takeLatest } from "@redux-saga/core/effects";
import { GET_TODOS } from "../ducks/todos";
import { handleGetTodos } from "./handlers/todosHandlers";

export function* watcherSaga() {
    yield takeLatest(GET_TODOS, handleGetTodos)
}