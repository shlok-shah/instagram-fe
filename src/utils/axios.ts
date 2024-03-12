import axios, { AxiosInstance } from 'axios';

export const userApi : AxiosInstance = axios.create({
    baseURL: "http://localhost:5000"
});
