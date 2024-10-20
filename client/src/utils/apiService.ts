import axios from 'axios';

// console.log("env", process.env.NEXT_PUBLIC_API_BASEURL);
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
export const Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASEURL}`,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json',
    },
    // withCredentials: true
});
