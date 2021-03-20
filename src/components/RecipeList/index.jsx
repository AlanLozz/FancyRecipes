import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './styles.css'

const Index = () => {
    const history = useHistory();
    const { name } = useParams();
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setRecipes(res.meals));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <h2 className="page-title">
                    {name}
                </h2>
            </div>
            <div className="card-container">
                {
                    !recipes ? (<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>) : (
                        recipes.map((r, i) => {
                            return (
                                <div className="card-recipe" key={i} onClick={e => history.push(`/recipe/${r.idMeal}`)}>
                                    <div className="card-recipe-image">
                                        <img src={r.strMealThumb} alt={r.strMeal} />
                                    </div>
                                    <div className="card-recipe-title">
                                        <h5>
                                            {r.strMeal}
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Index;