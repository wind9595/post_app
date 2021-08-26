import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS,
    RESET_POSTS,
    FETCHING_POSTS
} from "../utils/constants/actionTypes";

const initialState = {
    postsList: [],
    currentPage: 1,
    postsTotalCount: 0,
    fetching: false,
    loading: true,
    error: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: false,
                postsList: [...state.postsList, ...action.payloadPosts],
                postsTotalCount: action.payloadTotalCountPosts,
                currentPage: state.currentPage + 1
            }
        case FETCHING_POSTS:
            return {...state, fetching: action.payload}
        case RESET_POSTS:
            return initialState
        case FETCH_POSTS_ERROR:
            return {...state, loading: false, error: true}
        default:
            return state
    }
}