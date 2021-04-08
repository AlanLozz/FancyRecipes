import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Image from '../../../assets/images/login_image.png';
import UserContext from '../../Context/User/UserContext';
import './styles.css';

const Index = () => {
    const history = useHistory();
    const { logUser, isLogged } = useContext(UserContext);

    useEffect(()=> {
        console.log("Entra al useEffect en login");
        if(localStorage.getItem("isLogged")){
            history.push("/profile");
        }
    },[isLogged]);

    const [emailValue, setEmailValue] = useState("");
    const [emailError, setEmailError] = useState("hidden");
    const [emailClass, setEmailClass] = useState("form-fancy-input");
    const [emailValid, setEmailValid] = useState(false);

    const [passwordValue, setPasswordValue] = useState("");
    const [passwordError, setPasswordError] = useState("hidden");
    const [passwordClass, setPasswordClass] = useState("form-fancy-input");
    const [passwordValid, setPasswordValid] = useState(false);

    const emailChange = e => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailValue(e.target.value);
        if (regex.test(emailValue)) {
            setEmailClass("form-fancy-input is-valid");
            setEmailError("hidden");
            setEmailValid(true);
        } else {
            setEmailClass("form-fancy-input is-invalid");
            setEmailError("error");
            setEmailValid(false);
        }
    };

    const passwordChange = e => {
        if (passwordValue.length <= 16 || passwordValue === "") {
            setPasswordValue(e.target.value);
            if (passwordValue.length < 8) {
                setPasswordClass("form-fancy-input is-invalid");
                setPasswordError("error");
                setPasswordValid(false);
            } else {
                setPasswordClass("form-fancy-input is-valid");
                setPasswordError("hidden");
                setPasswordValid(true);
            }
        }
    };

    const HandleSubmit = async e => {
        e.preventDefault();
        if (emailValid && passwordValid && emailValue !== "" && passwordValue !== "") {
            const userData = {
                email: emailValue,
                password: passwordValue
            };
            logUser(userData);
        } else {
            if (emailValue === "") {
                setEmailClass("form-fancy-input is-invalid");
                setEmailError("error");
                setEmailValid(false);
            }
            if (passwordValue === "") {
                setPasswordClass("form-fancy-input is-invalid");
                setPasswordError("error");
                setPasswordValid(false);
            }
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-login">
                    <div className="card-login-form-container">
                        <h1>Login</h1>
                        <form onSubmit={e => HandleSubmit(e)} style={{ marginBottom: "20px" }}>
                            <div className="form-group">
                                <label htmlFor="email"><h3 className="mb-0">Email</h3></label>
                                <input type="mail" name="email" id="email" className={emailClass} onChange={e => emailChange(e)} value={emailValue} autoComplete="false" />
                                <span className={emailError}>Insert a valid email</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><h3 className="mb-0">Password</h3></label>
                                <input type="password" name="password" id="password" value={passwordValue} onChange={e => passwordChange(e)} className={passwordClass} />
                                <span className={passwordError}>Pasword could have 8 character min and 16 max</span>
                            </div>
                            <div className="submit-container">
                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                        <div className="row justify-content-center">
                            <a href="" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <a href="/register" className="forgot-pass">Don't have account?</a>
                        </div>
                    </div>
                    <div className="card-login-image">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index