import axios from "axios";

//Default config for axios

export default axios.create({
    baseURL:'https://randomuser.me/api',
    responseType:'json',
    timeout: 6000,
})