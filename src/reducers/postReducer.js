import {FETCH_POST, FETCH_POST_ERROR, RESET_POST} from "../utils/constants/actionTypes";

const initialState = {
    post: {},
    comments: [],
    user: {},
    loading: true,
    error: false
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                loading: false,
                post: action.payloadPost,
                comments: action.payloadComments,
                user: action.payloadUser
            }
        case FETCH_POST_ERROR:
            return {...state, loading: false, error: true}
        case RESET_POST:
            return initialState
        default:
            return state
    }
}