import axios from "axios";

// @param {string} email
// @param {string } password

export const login =(email, password)=>{

    let body={
        email,
        password
    }
    //returns the promise with response
    return axios.post('https://reqres.in/api/login', body)
};

export const createUser=()=>{

}