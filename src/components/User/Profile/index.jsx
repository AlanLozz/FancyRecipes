import React from 'react';
import Picture from '../../../assets/images/ProfilePicture.png';
import Construction from '../../../assets/images/Construction.png';
import './styles.css';

const Index = () => {
    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <img src={Picture} alt="" className="img-fluid"/>
                <div className="text-center mt-4">
                    <button className="btn-text-profile">
                        <h2>My Favourites</h2>
                    </button>
                    <button className="btn-text-profile">
                        <h2>Saved</h2>
                    </button>
                </div>
            </div>
            <div className="col-md-9">
                <img src={Construction} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}

export default Index