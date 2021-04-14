import React, { useState, useEffect } from 'react';
import { changePassword } from '../../../../helpers/User';
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2';

const StepThree = ({email}) => {
    const history = useHistory();
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordClass, setPasswordClass] = useState("");

    const [confirmValue, setConfirmValue] = useState("");
    const [confirmClass, setConfirmClass] = useState("");

    const [passwordEquals, setPasswordEquals] = useState(false);

    const handlePassword = e => {
        let {value} = e.target;
        setPasswordValue(value);
    };

    const handleConfirm = e => {
        let {value} = e.target;
        setConfirmValue(value);
    };

    useEffect(()=> {
        if(passwordValue.length < 8 && passwordValue!==""){
            setPasswordClass("is-invalid");
        } else {
            if(passwordValue!=="")
            setPasswordClass("is-valid");
        }
    },[passwordValue]);

    useEffect(()=> {
        if(passwordValue === confirmValue && confirmValue!==""){
            setConfirmClass("is-valid");
            setPasswordEquals(true);
        } else {
            if(passwordValue!=="")
            setConfirmClass("is-invalid");
            setPasswordEquals(false);
        }
    },[confirmValue, passwordValue]);

    const handleClick = () => {
        if(passwordEquals){
            changePassword(email, passwordValue)
                .then(response => {
                    if (response.data.ok) {
                        history.push('/login')
                        Swal.fire({
                            title:"¡Success!",
                            icon:"success",
                            text: "The password has been changed success"
                        });
                    } else {
                        Swal.fire({
                            title:"¡Error!",
                            icon:"error",
                            text: response.data.err.message
                        });
                    }
                });
        } else {
            Swal.fire({
                title:"¡Error!",
                icon:"error",
                text:"Please fill all the fields"
            });
        }
    };

    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className={`form-control ${passwordClass}`} value={passwordValue} onChange={e=> handlePassword(e)} autoFocus />
                <span className={passwordClass === "is-invalid" ? "error" : passwordClass === "is-valid" ? "hidden" : "hidden"}>The password must have a minimum of 8 characters number and letters, max 16 characters</span>
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">Repeat password</label>
                <input type="password" id="confirmpassword" className={`form-control ${confirmClass}`} value={confirmValue} onChange={e=> handleConfirm(e)} />
                <span className={confirmClass === "is-invalid" ? "error" : confirmClass === "is-valid" ? "hidden" : "hidden"}>The passwords does not match</span>
            </div>
            <button className={`btn btn-info mt-4 float-right ${passwordEquals ? '' : 'disabled'}`} onClick={e => handleClick()}>Next</button>
        </div>
    )
}

export default StepThree;
