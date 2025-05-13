import { FlAPI } from "../API/FlAPI/FlAPI" //

let initialState = {}
let GET_FL = 'GET_FL'

const dataFlReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_FL:
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getFL: (values) => {
        return {
            type: GET_FL,
            payload: values
        }
    }
}
// THUNK
// GET
export const getFlTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await FlAPI.getFLData().then((res) => {
                return res.data
            })
            await dispatch(actions.getFL(dataDB))
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
export default dataFlReduser