import axios from 'axios';
import { api_url, dev_url } from '../common/urls';
import jwt from 'jwt-decode';

const url_in_use = dev_url;

export const LoginUser = async user => {
    const { email, password } = user;
    let response = await axios.post(`${url_in_use}api/user/`, {
        "email": email,
        "password": password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response;
};

export const RegisterUser = async user => {
    const { username, email, password } = user;

    var response = await axios.post(`${url_in_use}api/user/registro`, {
        "username": username,
        "email": email,
        "password": password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response;
};

export const IsLogged = () => {
    if(localStorage.getItem("isLogged")) return true;
};

export const decodeToken = token => {
    return token ? jwt(token) : null;
};

export const genCode = async email => {
    const response = await axios.post(`${url_in_use}api/user/forgotPassword/setCode`,{email}, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
};

export const verifyCode = async (email, code) => {
    const response = await axios.post(`${url_in_use}api/user/forgotPassword/verifyCode`, { email, code }, {headers: {"Content-Type": "application/json"}});
    return response;
};

export const changePassword = async (email, password) => {
    const response = await axios.post(`${url_in_use}api/user/forgotPassword/changePassword`, {email, password}, {headers: {"Content-Type": "application/json"}});
    return response;
}; 