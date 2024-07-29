import * as axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://bucket-assignment-vercel.vercel.app/api',
    timeout: 10000,
});