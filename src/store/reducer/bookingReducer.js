import { CREATE_BOOKING, CREATE_BOOKING_ERR, ASSIGN_BOOKING, ASSIGN_BOOKING_ERR, GET_BOOKINGS, GET_BOOKINGS_ERR, GET_BOOKING, GET_BOOKING_ERR, CANCEL_ASSIGN_BOOKING, CANCEL_ASSIGN_BOOKING_ERR } from '../actionTypes/bookingType'

const initialState = {
    bookingList: [],
    bookingCreated: false,
    bookingAssigned: false,
    cancelBookingAssigned:false,
    bookingErr: [],
    bookingDetails: [],
    bookingDetailsErr: [],
    success: false,
}
const bookingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // CREATE BOOKING----------------------------------------------------------
        case CREATE_BOOKING: {
            console.log("bookingList*****", initialState.bookingList)
            let output = [...payload]
            return {
                ...state,
                bookingList: output,
                bookingCreated: true,
                success: true
            }
        }

        case CREATE_BOOKING_ERR: {
            return {
                ...state,
                bookingErr: payload,
                bookingCreated: false,
                success: false
            }
        }
        // ASSIGN BOOKING----------------------------------------------------------
        case ASSIGN_BOOKING: {
            return {
                ...state,
                bookingList: payload,
                bookingAssigned: true,
                success: true
            }
        }

        case ASSIGN_BOOKING_ERR: {
            return {
                ...state,
                bookingErr: payload,
                bookingAssigned: false,
                success: false
            }
        }
        // ASSIGN BOOKING----------------------------------------------------------
        case CANCEL_ASSIGN_BOOKING: {
            return {
                ...state,
                bookingList: payload,
                cancelBookingAssigned: true,
                success: true
            }
        }

        case CANCEL_ASSIGN_BOOKING_ERR: {
            return {
                ...state,
                bookingErr: payload,
                cancelBookingAssigned: false,
                success: false
            }
        }

        // GET BOOKINGS----------------------------------------------------------
        case GET_BOOKINGS: {
            return {
                ...state,
                bookingList: payload,
                success: true
            }
        }

        case GET_BOOKINGS_ERR: {
            return {
                ...state,
                bookingErr: payload,
                success: false
            }
        }
        // GET BOOKING----------------------------------------------------------
        case GET_BOOKING: {
            return {
                ...state,
                bookingDetails: payload,
                success: true
            }
        }

        case GET_BOOKING_ERR: {
            return {
                ...state,
                bookingDetailsErr: payload,
                success: false
            }
        }

        default: {
            return { ...state };
        }
    }
}

export default bookingReducer;