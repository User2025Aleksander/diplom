import { applyMiddleware, combineReducers, createStore } from 'redux'
import dataOmsReduser from './oms_reduser'
import { thunk } from 'redux-thunk'
import usersReduser from './authorization_reduser'
import dataDmsReduser from './dms_reduser'
import dataFlReduser from './fl_reduser'
import dataGzReduser from './gz_reduser'
import dataOrgReduser from './org_reduser'
import dataSportReduser from './sport_reduser'
import dataVmpReduser from './vmp_reduser'
import dataSvodReduser from './svod_reduser'

let rootReduser = combineReducers({
    users: usersReduser,
    SVOD: dataSvodReduser,
    OMS: dataOmsReduser,
    FL: dataFlReduser,
    GZ: dataGzReduser,
    ORG: dataOrgReduser,
    SPORT: dataSportReduser,
    VMP: dataVmpReduser,
    DMS: dataDmsReduser
})
let store = createStore(rootReduser, applyMiddleware(thunk))
window.store = store
export default store