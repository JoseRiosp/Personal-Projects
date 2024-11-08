import APIRequest from "../utils/config/axios.config";
import axios from "axios";

export default function getUser(){
   return APIRequest.get('/', {
    validateStatus: function(status){
        return status < 500; //menor de 500 caracteres
    }
   }); //https://randomuser.me/api/
   //APIRequest.post('/login', body);
}