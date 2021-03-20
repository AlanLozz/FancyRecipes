import React from 'react';
import './styles.css';

function Index() {
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
                    <li className="nav-item">
                        <a href="/profile" className="nav-link">
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Index;
