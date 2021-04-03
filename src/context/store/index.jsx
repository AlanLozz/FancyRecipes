import React, { useReducer, useEffect, useState } from 'react';
import authReducer from '../reducers/authentication.reducer';
import { setCurrentUser } from '../actions/authentication.action';
import AuthGlobal from './AuthGlobal';
import jwtdecode from 'jwt-decode';

const Index = props => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {}
    });

    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        if(localStorage.jwt){
            const decoded = localStorage.jwt ? localStorage.jwt : "";
            dispatch(setCurrentUser(jwtdecode(decoded)));
        }
        setShowChild(true);
    },[]);
    
    if(!showChild) {
        return null;
    } else {
        return (
            <AuthGlobal.provider 
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {props.children}
            </AuthGlobal.provider>
        )
    }
}

export default Index
