import {FETCH_POST, FETCH_POST_ERROR, RESET_POST} from "../utils/constants/actionTypes";
import PostAPI from "../api/postAPI";
import CommentAPI from "../api/commentAPI";
import userAPI from "../api/userAPI";

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            const responsePost = await PostAPI.getPost(id);
            const responseComments = await CommentAPI.getComments(id);
            const userId = responsePost.data.userId;
            const responseUser = await userAPI.getUser(userId);

            dispatch({type: FETCH_POST, payloadPost: responsePost.data, payloadComments: responseComments.data, payloadUser: responseUser.data});
        } catch (e) {
            dispatch({type: FETCH_POST_ERROR})
        }
     }
};

export const resetPost = () => {
    return (dispatch) => {
        dispatch({type: RESET_POST});
    }
};