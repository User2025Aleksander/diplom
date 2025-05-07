// import { UsersAPI } from '../API/UsersAPI/UsersAPI'

let initialState = {
    users: '',
    isAuth: false,
    dataForm: false,
    authForm: false,
    error: false
}
let OPEN_DATA_FORM = 'OPEN_DATA_FORM' // заполнение данных
let OPEN_AUTH_FORM = 'OPEN_AUTH_FORM' 
let GET_USERS = 'GET_USERS'
let IS_AUTH = 'IS_AUTH'
let ERROR = 'ERROR'

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DATA_FORM:
            return {
                ...state,
                dataForm: action.dataForm
            }
        case OPEN_AUTH_FORM:
            return {
                ...state,
                authForm: action.authForm
            }
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
export const actions = {
    openingDataForm: (dataForm) => {
        return {
            type: OPEN_DATA_FORM,
            dataForm: dataForm
        }
    },
    openingAuthForm: (authForm) => {
        return {
            type: OPEN_AUTH_FORM,
            authForm: authForm
        }
    },
    getUsers: (users) => {
        return {
            type: GET_USERS,
            users: users
        }
    },
    isAuth: (isAuth) => {
        return {
            type: IS_AUTH,
            isAuth: isAuth
        }
    },
    isError: (error) => {
        return {
            type: ERROR,
            error: error
        }
    }
}
// THUNK
export const toggleDataFormThunk = (dataForm) => {
    return async (dispatch) => {
        dispatch(actions.openingDataForm(dataForm))
    }
}
export const toggleAuthFormThunk = (authForm) => {
    return (dispatch) => {
        dispatch(actions.openingAuthForm(authForm))
    }
}
export const getUsersThunk = (value) => {
    console.log(value)
    return async (dispatch) => {
        try {
            let user = ''
            // let user = await UsersAPI.getUsersAPI(value).then((res) => {
            //     return res.data
            // })
            dispatch(actions.getUsers(user))
        } catch (err) {
            dispatch(actions.isError(err.response.data.error))
        }
    }
}
export const isAuthThunk = (bool) => {
    return async (dispatch) => {
        dispatch(actions.isAuth(bool))
    }
}
export const toogleIsError = (bool) => {
    return async (dispatch) => {
        dispatch(actions.isError(bool))
    }
}
export const cleanUsersThunk = (clean) => {
    return async (dispatch) => {
        dispatch(actions.getUsers(clean))
    }
}
export default usersReduser