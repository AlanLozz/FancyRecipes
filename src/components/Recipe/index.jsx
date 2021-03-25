import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Index = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.meals[0]));
    }, []);

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
                    <button className="recipe-aside-button mt-4">
                        Add to Favorites
                    </button>
                    <button className="recipe-aside-button mt-4">
                        Save
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