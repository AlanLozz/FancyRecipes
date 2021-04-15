import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Picture from '../../../assets/images/ProfilePicture.png';
import UserContext from '../../Context/User/UserContext';
import Swal from 'sweetalert2';
import './styles.css';
import { getMealsByUserId } from '../../../helpers/User';

const Index = () => {
    const history = useHistory();
    const {isLogged} = useContext(UserContext);
    const [meals, setMeals] = useState([]);
    const Username = localStorage.getItem("Username");

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

    useEffect(()=> {
        getMealsByUserId()
            .then( response => setMeals(response.data))
        
    },[]);

    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <img src={Picture} alt="" className="img-fluid" />
                <h2 className="mt-2">
                    {
                        Username
                    }
                </h2>
            </div>
            <div className="col-md-9">
                <h2>My Favourites</h2>
                {
                    meals.length > 0 ? (
                        <div className="card-columns">
                            {
                                meals.map((m, i) => {
                                    return (
                                        <div className="card" key={i}>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">{m.name}</h3>
                                                <button className="btn btn-info btn-sm btn-block" onClick={e =>  history.push(`/recipe/${m.id}/false`)}>Go to recipe</button>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    ) : (
                        <div className="alert alert-danger" role="alert">
                            <strong>Oh no!</strong>
                            <p>You have not added any recipe yet!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Index