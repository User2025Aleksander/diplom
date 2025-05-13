import { VmpAPI } from "../API/VmpAPI/VmpAPI"

let initialState = {}
let GET_VMP = 'GET_VMP'

const dataVmpReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_VMP: 
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getVMP: (values) => {
        return {
            type: GET_VMP,
            payload: values
        }
    }
}
// THUNK
// GET
export const getVmpTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await VmpAPI.getVmpData().then((res) => {
                return res.data
            })
            await dispatch(actions.getVMP(dataDB))
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
export default dataVmpReduser