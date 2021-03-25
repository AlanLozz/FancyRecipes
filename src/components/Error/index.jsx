import React from 'react';
import './styles.css';

const Index = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Opps!!</h2>
            <h2 className="error-subtitle">Page not found</h2>
            <a href="/" className="error-button">Back to Homepage</a>
        </div>
    )
}

export default Index;