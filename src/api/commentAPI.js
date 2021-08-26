import api from './commonAPI';

const getComments = async (postId) => {
    return await api.get(`/posts/${postId}/comments/`);
};

const CommentAPI = {
    getComments
}

export default CommentAPI;