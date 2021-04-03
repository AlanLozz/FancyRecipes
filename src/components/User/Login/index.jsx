import React, { useState } from 'react';
import Image from '../../../assets/images/login_image.png';
import './styles.css';

const Index = () => {
    const [ emailValue, setEmailValue ] = useState("");
    const [ emailError, setEmailError ] = useState("hidden");
    const [ emailClass, setEmailClass ] = useState("form-fancy-input");

    const [ passwordValue, setPasswordValue ] = useState("");
    const [ passwordError, setPasswordError ] = useState("hidden");
    const [ passwordClass, setPasswordClass ] = useState("form-fancy-input")

    const emailChange = e => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailValue(e.target.value);
        if(regex.test(emailValue)){
            setEmailClass("form-fancy-input is-valid");
            setEmailError("hidden");
        } else {
            setEmailClass("form-fancy-input is-invalid");
            setEmailError("error");
        }
    };

    const passwordChange = e => {
        if(passwordValue.length <= 16 || passwordValue === ""){
            setPasswordValue(e.target.value);
            if(passwordValue.length < 8){
                setPasswordClass("form-fancy-input is-invalid");
                setPasswordError("error");
            } else {
                setPasswordClass("form-fancy-input is-valid");
                setPasswordError("hidden");
            }
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-login">
                    <div className="card-login-form-container">
                        <h1>Login</h1>
                        <form action="" style={{marginBottom:"20px"}}>
                            <div className="form-group">
                                <label htmlFor="email"><h3 className="mb-0">Email</h3></label>
                                <input type="mail" name="email" id="email" className={emailClass} onChange={ e => emailChange(e) } value={emailValue} />
                                <span className={emailError}>Insert a valid email</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><h3 className="mb-0">Password</h3></label>
                                <input type="password" name="password" id="password" value={passwordValue} onChange={ e => passwordChange(e) } className={passwordClass} />
                                <span className={passwordError}>Insert a valid email</span>
                            </div>
                            <div className="submit-container">
                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                        <div className="row justify-content-center">
                            <a href="" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <a href="" className="forgot-pass">Don't have account?</a>
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
