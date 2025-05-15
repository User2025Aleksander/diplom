import { OmsAPI } from "../API/OmsAPI/OmsAPI" //

let initialState = {
    department: '',
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    august: '',
    september: '',
    october: '',
    november: '',
    december: ''
  }

let GET_OMS = 'GET_OMS'

const dataOmsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_OMS:
            return [...action.payload]
        default:
            return state
    }
}
export const actions = {
    getOMS: (values) => {
        return {
            type: GET_OMS, 
            payload: values
        }
    }
}
// THUNK
// GET
export const getOmsTHUNK = () => {
    return async (dispatch) => {
        try {
            let dataDB = await OmsAPI.getOmsData().then((res) => {
                return res.data
            })
            await dispatch(actions.getOMS(dataDB))
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
export default dataOmsReduser