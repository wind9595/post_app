import {FETCH_USER, FETCH_USER_ERROR, RESET_USER} from "../utils/constants/actionTypes";

const initialState = {
    user: {},
    loading: true,
    error: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {...state, loading: false, user: action.payload}
        case FETCH_USER_ERROR:
            return {...state, loading: false, error: true}
        case RESET_USER:
            return initialState
        default:
            return state
    }
};