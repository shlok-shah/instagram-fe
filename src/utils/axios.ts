import axios, { AxiosInstance } from 'axios';

export const userApi : AxiosInstance = axios.create({
    baseURL: "http://localhost:3001/api",
    withCredentials: true
});
