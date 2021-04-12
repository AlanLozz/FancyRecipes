import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Picture from '../../../assets/images/ProfilePicture.png';
import Construction from '../../../assets/images/Construction.png';
import UserContext from '../../Context/User/UserContext';
import Swal from 'sweetalert2';
import './styles.css';

const Index = () => {
    const history = useHistory();
    const {isLogged} = useContext(UserContext);

    useEffect(() => {
        if (!localStorage.getItem("isLogged")) {
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'First you need to sign in',
                confirmButtonColor:'red',
                confirmButtonText:'Ok'
            })
            history.push("/login");
        } else {

        }
    }, [isLogged]);
    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <img src={Picture} alt="" className="img-fluid" />
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
                <img src={Construction} alt="" className="img-fluid" />
            </div>
        </div>
    )
}

export default Index