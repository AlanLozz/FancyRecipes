import axios from 'axios';
import { api_url, dev_url } from '../common/urls';
import jwt from 'jwt-decode';

const url_in_use = api_url;

export const addRecipe = async (id, name, type) => {
    const userId = localStorage.getItem("UserId");
    const token = localStorage.getItem("jwt");
    const response = axios.post(`${url_in_use}api/meal/addmeal`,{ id, userid: userId, name, type }, {headers: {"Content-Type": "application/json", "Authorization": token}});
    return response;
};