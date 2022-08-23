import { CREATE_DX, CREATE_DX_ERR } from '../actionTypes/dxType'

const initialState = {
    dxList: [],
    success: false,
}
const dxReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_DX: {
            return {
                ...state,
                bookingList: payload,
                success: true
            }
        }

        case CREATE_DX_ERR: {
            return {
                ...state,
                bookingList: [],
                success: false
            }
        }

        default: {
            return { ...state };
        }
    }
}

export default dxReducer;