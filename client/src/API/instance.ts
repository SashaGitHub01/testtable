import axios from "axios";

export const instance = axios.create({
   baseURL: process.env.REACT_APP_SERVER || 'http://localhost:3001/api'
})