import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_MY_BLOG_URL,
    timeout: 1000
});

export default request;