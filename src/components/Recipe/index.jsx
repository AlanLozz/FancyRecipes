import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByUserId } from '../../helpers/User';
import { addRecipe } from '../../helpers/Meals';
import Swal from 'sweetalert2';
import './styles.css';

const Index = () => {
    const { id, random } = useParams();
    const [data, setData] = useState(null);
    const [buttonState, setButtonState] = useState(false);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const rand = "https://www.themealdb.com/api/json/v1/1/random.php";

    useEffect(() => {
        //Verifica si se tiene que buscar una receta random
        if(random == "true"){
            fetch(rand)
                .then(res => res.json())
                .then(res => setData(res.meals[0]));
        } else {
            fetch(url)
                .then(res => res.json())
                .then(res => setData(res.meals[0]));
        }
        // Verificar si la receta ya existe para el usuario
        if(localStorage.getItem("isLogged")){
            getMealsByUserId()
                .then(response => {
                    let meals = response.data;
                    if(meals.find(meal => meal.id === id)){
                        setButtonState(true);
                    }
                })
        }
    }, []);

    const handleButton = () => {
        if(!buttonState){
            addRecipe(id, data.strMeal, "Recipe")
                .then( response => {
                    if (response.data.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: '¡Saved Successfully!'
                        });
                        setButtonState(true);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: '¡Error!',
                            text: response.data.err.message
                        })
                    }
                })
        } else {
            Swal.fire({
                icon: 'info',
                title: '¡You already have it in your saved recipes!'
            });
        }
    };

    return (
        <div className="container">
            <div className="recipe-container">
                <div className="recipe-aside-container">
                    {
                        !data ? <div className="recipe-aside-loader-title"></div> : <h1 className="text-center">{data.strMeal}</h1>
                    }
                    {
                        !data ? <div className="recipe-aside-loader-image"></div> : <img src={data.strMealThumb} alt="" className="recipe-image" />
                    }
                    <button className="recipe-aside-button mt-4" onClick={e => handleButton()}>
                        { buttonState ? 'Saved' : 'Save'}
                    </button>
                </div>
                {
                    !data ? <div className="recipe-content-loader-container"></div> : (
                        <div className="recipe-content-container">
                            <h1 className="text-center">Ingredients</h1>
                            <hr className="bg-dark" />
                            <div className="text-center">
                                <div className="row">
                                    <div className="col-6">
                                        {data.strIngredient1 !== "" ? <p>{data.strIngredient1}</p> : ""}
                                        {data.strIngredient2 !== "" ? <p>{data.strIngredient2}</p> : ""}
                                        {data.strIngredient3 !== "" ? <p>{data.strIngredient3}</p> : ""}
                                        {data.strIngredient4 !== "" ? <p>{data.strIngredient4}</p> : ""}
                                        {data.strIngredient5 !== "" ? <p>{data.strIngredient5}</p> : ""}
                                        {data.strIngredient6 !== "" ? <p>{data.strIngredient6}</p> : ""}
                                        {data.strIngredient7 !== "" ? <p>{data.strIngredient7}</p> : ""}
                                        {data.strIngredient8 !== "" ? <p>{data.strIngredient8}</p> : ""}
                                    </div>
                                    <div className="col-6">
                                        {data.strIngredient9 !== "" ? <p>{data.strIngredient9}</p> : ""}
                                        {data.strIngredient10 !== "" ? <p>{data.strIngredient10}</p> : ""}
                                        {data.strIngredient11 !== "" ? <p>{data.strIngredient11}</p> : ""}
                                        {data.strIngredient12 !== "" ? <p>{data.strIngredient12}</p> : ""}
                                        {data.strIngredient13 !== "" ? <p>{data.strIngredient13}</p> : ""}
                                        {data.strIngredient14 !== "" ? <p>{data.strIngredient14}</p> : ""}
                                        {data.strIngredient15 !== "" ? <p>{data.strIngredient15}</p> : ""}
                                        {data.strIngredient16 !== "" ? <p>{data.strIngredient16}</p> : ""}
                                        {data.strIngredient17 !== "" ? <p>{data.strIngredient17}</p> : ""}
                                        {data.strIngredient18 !== "" ? <p>{data.strIngredient18}</p> : ""}
                                        {data.strIngredient19 !== "" ? <p>{data.strIngredient19}</p> : ""}
                                        {data.strIngredient20 !== "" ? <p>{data.strIngredient20}</p> : ""}
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-2 text-center">Instructions</h1>
                            <hr className="bg-dark" />
                            <div className="row align-items-center">
                                <div className="col-md-9">
                                    <div className="text-center">
                                        <p>
                                            {data.strInstructions}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href={data.strYoutube} className="text-center" target="_blank">
                                        <h3>Link To Youtube Video</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Index