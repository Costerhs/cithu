import axios from "axios"

const instance = axios.create({
    baseURL: `https://api.github.com/`
});

export const userApi = {
    getUser(username) {
        return instance.get(`users/${username}`)
    },
    getUserRepos(username) {
        return instance.get(`users/${username}/repos`)
    },
    getUserMorePart(username, partname) {
        return instance.get(`users/${username}/${partname}`)
    },
    getUsersByName(name) {
        return instance.get(`search/users?q=${name}`)
    }
}