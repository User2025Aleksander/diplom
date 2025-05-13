import { DmsAPI } from "../API/DmsAPI/DmsAPI"

let initialState = {}
let GET_DMS = 'GET_DMS'

const dataDmsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_DMS:
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getDMS: (values) => {
        return {
            type: GET_DMS,
            payload: values
        }
    }
}
// THUNK
// GET
export const getDmsTHUNK = () => { //
    return async (dispatch) => {
        try {
            let dataDB = await DmsAPI.getDmsData().then((res) => {
                return res.data
            })
            await dispatch(actions.getDMS(dataDB))
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
export default dataDmsReduser