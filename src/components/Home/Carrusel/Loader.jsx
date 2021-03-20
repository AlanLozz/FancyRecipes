import React from 'react';
import Left from '../../../assets/icons/ArrowLeft.svg';
import Right from '../../../assets/icons/ArrowRight.svg';
import './loader.css';

const loader = () => {
    return (
        <>
            <div className="loader-title"></div>
            <div className="carrusel">
                <div className="carrusel-previous">
                    <button className="carrusel-button">
                        <img src={Left} alt=""/>
                    </button>
                </div>
                <div className="carrusel-container">
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                    <div className="carrusel-item">
                        <div className="card-loader">
                            <div className="card-loader-image"></div>
                            <h4 className="card-loader-title"></h4>
                            <div className="line"></div>
                            <span className="card-loader-description"></span>
                        </div>
                    </div>
                </div>
                <div className="carrusel-next">
                    <button className="carrusel-button">
                        <img src={Right} alt=""/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default loader
