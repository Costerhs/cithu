import axios from "axios"

const instance = axios.create({
    baseURL: `https://api.github.com/`
});

export const userApi = {
    getUser(username) {
        return instance.get(`users/${username}`)
    }
}