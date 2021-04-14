import React, { useState, useEffect } from 'react';
import { verifyCode } from '../../../../helpers/User';
import Swal from 'sweetalert2';
import './styles.css';

const StepTwo = ({email, setStep}) => {
    const [codeValue, setCodeValue] = useState("");

    const changeValue = e => {
        let reg = /[a-zA-Z0-9^]$/;
        const { value } = e.target;
        if (reg.test(value) || value == "") {
            setCodeValue(value.toUpperCase());
        }
    };

    useEffect(()=> {
        if(codeValue.length === 6){
            verifyCode(email, codeValue)
                .then(response => {
                    if(response.data.ok){
                        setStep(2);
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "¡Error!",
                            text: "The code is incorrect"
                        });
                    }
                });
        }
    },[codeValue]);

    return (
        <div className="col">
            <h5 className="text-center">
                Insert the code of your email
            </h5>
            <div className="input-code-container">
                <input type="text" className="input-code" value={codeValue} onChange={e => changeValue(e)} maxLength="6" placeholder="CODE" />
            </div>
        </div>
    )
}

export default StepTwo
