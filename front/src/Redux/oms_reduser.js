// import { LetterINAPI } from "../Api/LetterIN/LetterIN"
// import { DataLettersIN } from "../Data/DataLettersIN/DataLettersIN"

let initialState = {}
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
            let dataDB = {}
            // let dataDB = await LetterINAPI.getLetterInData().then((res) => {
            //     return res.data
            // })
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