import { LOGIN_USER, LOGIN_USER_ERR, GET_USERS, GET_USERS_ERR } from '../actionTypes/userType'

const initialState = {
    loginRes:[],
    loginErr:[],
    usersList:[],
    usersErr:[],
    success: false,
}
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_USER: {
            return {
                ...state,
                loginRes: payload,
                success: true
            }
        }

        case LOGIN_USER_ERR: {
            return {
                ...state,
                loginErr: payload,
                success: false
            }
        }
        case GET_USERS: {
            return {
                ...state,
                usersList: payload,
                success: true
            }
        }

        case GET_USERS_ERR: {
            return {
                ...state,
                usersErr: payload,
                success: false
            }
        }

        default: {
            return { ...state };
        }
    }
}

export default userReducer;