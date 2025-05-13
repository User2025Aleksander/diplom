import { SvodAPI } from "../API/SvodAPI/SvodAPI"

let initialState = {}
let GET_SVOD = 'GET_SVOD'

const dataSvodReduser = (state = initialState, action) => { 
    switch (action.type) {
        case GET_SVOD: 
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getSVOD: (values) => {
        return {
            type: GET_SVOD,
            payload: values
        }
    }
}
// THUNK
// GET
export const getSvodTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await SvodAPI.getSvodData().then((res) => {
                return res.data
            })
            await dispatch(actions.getSVOD(dataDB)) 
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
export default dataSvodReduser