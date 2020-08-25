import {createStore, combineReducers ,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import buyersPageReducer from './buyersPageReducer'
import terminalsPageReducer from './terminalsPageReducer'
import loginPageReducer from './loginPageReducer'

let reducers = combineReducers({
    loginPage: loginPageReducer,
    buyersPage: buyersPageReducer,
    terminalsPage: terminalsPageReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;