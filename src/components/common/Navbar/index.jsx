import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context/User/UserContext';
import './styles.css';

function Index() {
    const { isLogged, outUser } = useContext(UserContext);
    const [navState, setNavState] = useState(false);

    useEffect(() => {
        if(localStorage.isLogged){
            setNavState(true);
        } else {
            setNavState(false);
        }
    },[isLogged]);

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
            <a href="/" className="navbar-brand">Fancy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/recipelist/Seafood" className="nav-link">
                            Seafood
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/recipelist/Pasta" className="nav-link">
                            Pasta
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/recipelist/Breakfast" className="nav-link">
                            Breakfast
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/recipelist/Vegan" className="nav-link">
                            Vegan
                        </a>
                    </li>
                    {
                        !navState ? (
                            <>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/register" className="nav-link">
                                        Register
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a href="/profile" className="nav-link">
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link" onClick={e => outUser()}>
                                        Logout
                                    </a>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Index;
