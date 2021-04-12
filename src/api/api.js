import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b8de4eac-354f-4479-a9f2-83e597ef2e6b'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(useId) {
        return instance.post(`follow/${useId}`)
    },
    unfollow(useId) {
        return instance.delete(`follow/${useId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
    
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}
