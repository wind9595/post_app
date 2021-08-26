import PostAPI from "../api/postAPI";
import {
    FETCH_POSTS,
    FETCH_POSTS_ERROR,
    FETCHING_POSTS,
    RESET_POSTS
} from "../utils/constants/actionTypes";

export const getAllPosts = (currentPage) => {
    return async (dispatch) => {
        try {
            const response = await PostAPI.getAll(currentPage);

            dispatch({
                type: FETCH_POSTS,
                payloadTotalCountPosts: response.headers['x-total-count'],
                payloadPosts: response.data
            });
        } catch (e) {
            dispatch({type: FETCH_POSTS_ERROR});
        };
    };
};

export const fetchingPostsTrue = () => {
    return async (dispatch) => {
        dispatch({type: FETCHING_POSTS, payload: true});
    }
};

export const fetchingPostsFalse = () => {
    return async (dispatch) => {
        dispatch({type: FETCHING_POSTS, payload: false});
    }
};

export const resetPosts = () => {
    return async (dispatch) => {
        dispatch({type: RESET_POSTS});
    }
};