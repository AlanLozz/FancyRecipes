import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                user: payload.userData,
                token: payload.token,
                isLogged: payload.isLogged
            }
        
        case LOGOUT_USER:
            return {
                ...state,
                user: payload.userData,
                token: payload.token,
                isLogged: payload.isLogged
            }
        default:
            return state;
    }
};