import React, { useReducer, useEffect } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import Swal from 'sweetalert2';
import { LoginUser, RegisterUser, decodeToken, IsLogged } from '../../../helpers/User';

import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../types';

const UserState = props => {
    const initialState = {
        token: '',
        isLogged: false
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const logUser = async userData => {
        const res = await LoginUser(userData);
        if (res.data.ok) {
            localStorage.setItem("isLogged", res.data.ok);
            localStorage.setItem("jwt", res.data.token);
            dispatch({
                type: LOGIN_USER,
                payload: {
                    token: res.data.token,
                    isLogged: res.data.ok,
                }
            });
        } else {
            dispatch({
                type: LOGOUT_USER,
                payload: {
                    token: '',
                    isLogged: res.data.ok
                }
            });
            Swal.fire({
                title: "Error",
                text: res.data.err.message,
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "red"
            });
        }
    };

    const outUser = () => {
        localStorage.removeItem("isLogged");
        localStorage.removeItem("jwt");
        dispatch({
            type: LOGOUT_USER,
            payload: {
                token: '',
                isLogged: false
            }
        })
    };

    const regUser = userData => {
        const response = RegisterUser(userData);
        if (response.data.err) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: response.data.err.message,
                confirmButtonText: "Ok",
                confirmButtonColor: "green"
            })
        }
    };

    return (
        <UserContext.Provider value={{
            user: state.user,
            token: state.token,
            isLogged: state.isLogged,
            logUser,
            outUser
        }} >
            {props.children}
        </UserContext.Provider>
    )
};

export default UserState;