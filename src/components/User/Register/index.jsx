import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Coctels from '../../../assets/images/coctels.png';
import UserContext from '../../Context/User/UserContext';
import Swal from 'sweetalert2';
import './styles.css';

const Index = () => {
    const history = useHistory();
    const { regUser, isLogged } = useContext(UserContext);

    useEffect(()=> {
        if(localStorage.getItem("isLogged")){
            history.push("/profile");
        }
    },[isLogged]);

    const [usernameValue, setUsernameValue] = useState("");
    const [usernameClass, setUsernameClass] = useState("form-fancy-input");
    const [usernameError, setUsernameError] = useState("hidden");
    const [usernameValid, setUsernameValid] = useState(false);

    const [emailValue, setEmailValue] = useState("");
    const [emailClass, setEmailClass] = useState("form-fancy-input");
    const [emailError, setEmailError] = useState("hidden");
    const [emailValid, setEmailValid] = useState(false);

    const [passwordValue, setPasswordValue] = useState("");
    const [passwordClass, setPasswordClass] = useState("form-fancy-input");
    const [passwordError, setPasswordError] = useState("hidden");
    const [passwordValid, setPasswordValid] = useState(false);

    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [confirmPasswordClass, setConfirmPasswordClass] = useState("form-fancy-input");
    const [confirmPasswordError, setConfirmPasswordError] = useState("hidden");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

    const changeUsername = e => {
        const reg = /^[a-zA-Z\n]*$/;
        if (reg.test(e.target.value) || usernameValue=="") {
            setUsernameValue(e.target.value);
        } else {
            setUsernameError("error");
            setUsernameClass("form-fancy-input is-invalid");
        }
    };

    useEffect(()=> {
        if(usernameValue!==""){
            if (usernameValue.length < 8) {
                setUsernameError("error");
                setUsernameClass("form-fancy-input is-invalid");
            } else if (usernameValue.length > 16) {
                setUsernameError("error");
                setUsernameClass("form-fancy-input is-invalid");
            } else {
                setUsernameError("hidden");
                setUsernameClass("form-fancy-input is-valid");
                setUsernameValid(true);
            }
        }
    },[usernameValue]);

    const changeEmail = e => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailValue(e.target.value);
        if (regex.test(emailValue)) {
            setEmailClass("form-fancy-input is-valid");
            setEmailError("hidden");
            setEmailValid(true);
        } else {
            setEmailClass("form-fancy-input is-invalid");
            setEmailError("error");
        }
    };

    const changePassword = e => {
        setPasswordValue(e.target.value);
        if (passwordValue.length < 8) {
            setPasswordClass("form-fancy-input is-invalid");
            setPasswordError("error");
        } else {
            setPasswordClass("form-fancy-input is-valid");
            setPasswordError("hidden");
            setPasswordValid(true);
        }
    };

    const changeConfirm = e => {
        setConfirmPasswordValue(e.target.value);
    };

    useEffect(() => {
        if (confirmPasswordValue !== "") {
            if (confirmPasswordValue === passwordValue) {
                setConfirmPasswordError("hidden");
                setConfirmPasswordClass("form-fancy-input is-valid");
                setConfirmPasswordValid(true);
            } else {
                setConfirmPasswordError("error");
                setConfirmPasswordClass("form-fancy-input is-invalid");
            }
        }
    }, [confirmPasswordValue]);

    const formSubmit = async e => {
        e.preventDefault();
        if(passwordValid && confirmPasswordValid && emailValid && usernameValid){
            let user = {
                username: usernameValue,
                email: emailValue,
                password: passwordValue
            };
            const response = await regUser(user);
            if(response.data.ok){
                history.push("/login");
                Swal.fire({
                    icon: 'success',
                    title: "¡You has been registered successfully!",
                    text: "Now, you can sign in",
                    confirmButtonColor:'green',
                    confirmButtonText:"ok"
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "¡Error!",
                    text: response.data.err.message,
                    confirmButtonColor:'red',
                    confirmButtonText:"ok"
                });    
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: "¡Error!",
                text: "Please, fill out the form correctly",
                confirmButtonColor:'red',
                confirmButtonText:"ok"
            });
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-registro">
                    <div className="card-registro-image">
                        <img src={Coctels} alt="Image" />
                    </div>
                    <div className="card-registro-container">
                        <form onSubmit={e => formSubmit(e)}>
                            <h1 className="card-registro-title">Sign Up</h1>
                            <div className="form-group">
                                <label htmlFor="username">
                                    <h3 className="mb-0">Username</h3>
                                </label>
                                <input type="text" className={usernameClass} id="username" autoComplete="off" value={usernameValue} onChange={e => changeUsername(e)} />
                                <span className={usernameError}>The username needs 8 character min, 16 max</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <h3 className="mb-0">Email</h3>
                                </label>
                                <input type="text" className={emailClass} id="email" autoComplete="off" value={emailValue} onChange={e => changeEmail(e)} />
                                <span className={emailError}>Insert a valid email</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <h3 className="mb-0">Password</h3>
                                </label>
                                <input type="password" className={passwordClass} id="password" value={passwordValue} onChange={e => changePassword(e)} />
                                <span className={passwordError}>The password must have a minimum of 8 characters number and letters, max 16 characters</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">
                                    <h3 className="mb-0">Confirm password</h3>
                                </label>
                                <input type="password" className={confirmPasswordClass} id="confirm-password" value={confirmPasswordValue} onChange={e => changeConfirm(e)} />
                                <span className={confirmPasswordError}>Password not match</span>
                            </div>
                            <div className="submit-container">
                                <button className="btn-submit bg-purple mt-4" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;