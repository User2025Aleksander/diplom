import { SportAPI } from "../API/SportAPI/SportAPI"

let initialState = {}
let GET_SPORT = 'GET_SPORT'

const dataSportReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPORT:
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getSPORT: (values) => {
        return {
            type: GET_SPORT,
            payload: values
        }
    }
}
// THUNK
// GET
export const getSportTHUNK = () => { 
    return async (dispatch) => {
        try {
            let dataDB = await SportAPI.getSportData().then((res) => { 
                return res.data
            })
            await dispatch(actions.getSPORT(dataDB))
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
export default dataSportReduser