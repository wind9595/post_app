import api from './commonAPI';

const getAll = async (currentPage) => {
    return await api.get(`/posts?_limit=20&_page=${currentPage}`);
}

const getPost = async (id) => {
    return await api.get(`/posts/${id}/`);
}

const PostAPI = {
    getAll,
    getPost
}

export default PostAPI;