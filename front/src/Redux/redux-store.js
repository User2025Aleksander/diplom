import { applyMiddleware, combineReducers, createStore } from 'redux'
import dataOmsReduser from './oms_reduser'
import { thunk } from 'redux-thunk'
import usersReduser from './authorization_reduser'

let rootReduser = combineReducers({
    users: usersReduser,
    OMS: dataOmsReduser
})
let store = createStore(rootReduser, applyMiddleware(thunk))
window.store = store
export default store