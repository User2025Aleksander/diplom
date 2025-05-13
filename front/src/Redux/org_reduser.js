import { OrgAPI } from "../API/OrgAPI/OrgAPI"

let initialState = {}
let GET_ORG = 'GET_ORG'

const dataOrgReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORG: 
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getORG: (values) => {
        return {
            type: GET_ORG,
            payload: values
        }
    }
}
// THUNK
// GET
export const getOrgTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await OrgAPI.getOrgData().then((res) => {
                return res.data
            })
            await dispatch(actions.getORG(dataDB))
        } catch (err) {
            if (err.response) {
                console.log('Error data:', err.response.data);
                console.log('Error status:', err.response.status);
            } else if (err.request) {
                console.log('Error request:', err.request);
            } else {
                console.log('Error message:', err.message);
            }
        }
    }
}
export default dataOrgReduser