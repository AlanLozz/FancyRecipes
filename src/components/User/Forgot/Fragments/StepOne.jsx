import React, { useEffect, useState } from 'react';
import { genCode } from '../../../../helpers/User';
const Swal = require('sweetalert2');

const StepOne = ({ emailValue, setEmailValue, setStep }) => {
    const [emailClass, setEmailClass] = useState("form-control");
    const [emailError, setEmailError] = useState("hidden");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const changeValue = e => {
        setEmailValue(e.target.value);
    };

    useEffect(() => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(emailValue)) {
            setEmailClass("form-control is-valid");
            setEmailError("hidden");
            setIsValidEmail(true);
        } else {
            if (emailValue !== "") {
                setEmailClass("form-control is-invalid");
                setEmailError("error");
                setIsValidEmail(false);
            }
        }
    }, [emailValue]);

    const handleClick = async _ => {
        if (isValidEmail && emailValue !== "") {
            const response = await genCode(emailValue);

            if(response.data.ok){
                setStep(1);
            } else {
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: response.data.err.message
                })
            }
        } else {
            if (emailValue !== "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Verify if the email is valid'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Insert an email'
                })
            }
        }
    };

    return (
        <>
            <span className="text-muted mb-2">
                Insert your email to recover your password
            </span>
            <div className="form-group mt-2">
                <label htmlFor="email">Email:</label>
                <input type="text" className={emailClass} id="email" autoComplete="off" autoFocus value={emailValue} onChange={e => changeValue(e)} />
                <span className={emailError}>Insert a valid email</span>
            </div>
            <button className={`btn btn-info mt-4 float-right ${isValidEmail ? '' : 'disabled'}`} onClick={e => handleClick()}>Next</button>
        </>
    )
}

export default StepOne
