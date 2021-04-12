import React, { useState } from 'react';
import StepOne from './Fragments/StepOne';
import StepTwo from './Fragments/StepTwo';
import StepThree from './Fragments/StepThree';

const Index = () => {
    const [step, setStep] = useState(0);
    const [emailValue, setEmailValue] = useState("");

    return (
        <>
            <div className="row justify-content-center align-items-center" style={{height:"70vh"}}>
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header">
                            <div className="progress" style={{ height: "2px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: `${step === 0 ? '25%' : step === 1 ? '60%' : step === 2 ? '100%' : '0' }` }} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                Recover password
                            </h3>
                                <div className="row">
                                    {
                                        step === 0 ? <StepOne emailValue={emailValue} setEmailValue={setEmailValue} setStep={setStep} /> :
                                        step === 1 ? <StepTwo /> :
                                        step === 2 ? <StepThree /> :
                                        undefined
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
