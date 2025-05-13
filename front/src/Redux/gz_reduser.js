import { GzAPI } from "../API/GzAPI/GzAPI"

let initialState = {}
let GET_GZ = 'GET_GZ'

const dataGzReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_GZ:
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getGZ: (values) => {
        return {
            type: GET_GZ,
            payload: values
        }
    }
}
// THUNK
// GET
export const getGzTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await GzAPI.getGzData().then((res) => {
                return res.data
            })
            await dispatch(actions.getGZ(dataDB))
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
export default dataGzReduser