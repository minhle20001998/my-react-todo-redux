import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import todosReducer from "./ducks/todos";
import { watcherSaga } from "./sagas/rootSaga";

const reducers = combineReducers({
    todos: todosReducer
})

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(reducers, {}, applyMiddleware(...middlewares))

sagaMiddleware.run(watcherSaga)

export default store;