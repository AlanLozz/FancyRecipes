import React from 'react';
import Coctels from '../../../assets/images/coctels.png';
import './styles.css';

const Index = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-registro">
                    <div className="card-registro-image">
                        <img src={Coctels} alt="Image" />
                    </div>
                    <div className="card-registro-container">
                        <form>
                            <h1 className="card-registro-title">Sign Up</h1>
                            <div className="form-group">
                                <label htmlFor="username">
                                    <h3 className="mb-0">Username</h3>
                                </label>
                                <input type="text" className="form-fancy-input" id="username" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <h3 className="mb-0">Email</h3>
                                </label>
                                <input type="text" className="form-fancy-input" id="email" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <h3 className="mb-0">Password</h3>
                                </label>
                                <input type="password" className="form-fancy-input" id="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">
                                    <h3 className="mb-0">Confirm password</h3>
                                </label>
                                <input type="text" className="form-fancy-input" id="confirm-password" />
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