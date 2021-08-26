import {combineReducers} from "redux";
import {postReducer} from "./postReducer";
import {postsReducer} from "./postsReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer,
    user: userReducer
});