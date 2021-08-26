import api from './commonAPI';

const getUser = async (userId) => {
    return await api.get(`/users/${userId}/`);
};

const userAPI = {
    getUser
};

export default userAPI;