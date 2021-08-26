import userAPI from "../api/userAPI";
import {FETCH_USER, FETCH_USER_ERROR, RESET_USER} from "../utils/constants/actionTypes";


export const getUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await userAPI.getUser(id);

            dispatch({type: FETCH_USER, payload: response.data});
        } catch (e) {
            dispatch({type: FETCH_USER_ERROR})
        }
    }
};

export const resetUser = () => {
    return (dispatch) => {
        dispatch({type: RESET_USER});
    }
};