import axios from 'axios';
import { api_url, dev_url } from '../common/urls';

export const LoginUser = async user => {
    const { email, password } = user;
    var response = "";
    await axios.post(`${dev_url}api/user/`,{
        "email": email,
        "password": password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( res => response= res)

    return response;
}