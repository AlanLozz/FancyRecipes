import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Index = () => {
    const { id } = useParams();
    const [data,setData] = useState(null);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const content = (
        <div className="recipe-content-container">
            content
        </div>
    );

    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.meals[0]));
    },[]);
    console.log(data);
    return (
        <div className="container">
            <div className="recipe-container">
                <div className="recipe-aside-container">
                    {
                        !data ? <div className="recipe-aside-loader-title"></div> : <h1>{data.strMeal}</h1>
                    }
                    {
                        !data ? <div className="recipe-aside-loader-image"></div> : <img src={data.strMealThumb} alt=""/>
                    }
                    <button className="recipe-aside-button">
                        Add to Favorites
                    </button>
                    <button className="recipe-aside-button">
                        Save
                    </button>
                </div>
                {
                    !data ? <div className="recipe-content-loader-container"></div> : content
                }
            </div>
        </div>
    )
}

export default Index