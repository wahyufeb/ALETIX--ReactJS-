import axios from "axios";
import usersAPI from "../services/users/users"

// check user data in sesion storage
export const getUser = () => {
    const user = sessionStorage.getItem("user");
    if(user) return JSON.parse(user);
    else return null;
}

// get token from session storage
export const getToken = async () => {
    const token = await sessionStorage.getItem("token");
    try {
        if(token === null){
            return false;
        }else{
            const reqGetUserToken = await axios.get(usersAPI.cekUser, {
                headers:{
                    "auth-token":token
                }
            });
            const resGetUserToken = await reqGetUserToken.data;
            return resGetUserToken.success
        }
    } catch (err) {
        console.log(err)
    }
}


// remove user from session storage
export const removeUser = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
}

// set session storage
export const setUserSesion = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}



