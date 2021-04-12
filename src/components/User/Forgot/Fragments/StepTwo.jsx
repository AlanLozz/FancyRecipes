import React, { useState, useEffect } from 'react';
import './styles.css';

const StepTwo = () => {
    const [codeValue, setCodeValue] = useState("");
    const [seconds, setSeconds] = useState(200);

    const changeValue = e => {
        let reg = /[a-zA-Z0-9^]$/;
        const {value} = e.target;
        if(reg.test(value) || value == ""){
            setCodeValue(value.toUpperCase());
        }
    };

    setInterval(()=> {
        setSeconds(seconds-1)
    },1000);
    
    return (
        <div className="col">
            <h5 className="text-center">
                Insert the code of your email
            </h5>
            <div className="input-code-container">
                <input type="text" className="input-code" value={codeValue} onChange={e=>changeValue(e)} maxLength="6" placeholder="CODE" />
            </div>
            <span className="text-muted mt-2">
                You can request a new code at {seconds < 10 ? `0${seconds}` : seconds } seconds.
            </span>
        </div>
    )
}

export default StepTwo
