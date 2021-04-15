import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Index = () => {
    const [drink, setDrink] = useState(false);
    const { id, random } = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const rand = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    console.log(drink);

    useEffect(() => {
        if(random == "true"){
            fetch(rand)
            .then(res => res.json())
            .then(res => setDrink(res.drinks[0]));
        } else {
            fetch(url)
                .then(res => res.json())
                .then(res => setDrink(res.drinks[0]));
        }
    }, []);

    return (
        <div className="container">
            <div className="recipe-container">
                <div className="recipe-aside-container">
                    {
                        !drink ? <div className="recipe-aside-loader-title"></div> : <h1 className="text-center">{drink.strDrink}</h1>
                    }
                    {
                        !drink ? <div className="recipe-aside-loader-image"></div> : <img src={drink.strDrinkThumb} alt="" className="recipe-image" />
                    }
                    <button className="recipe-aside-button mt-4">
                        Add to Favorites
                    </button>
                    <button className="recipe-aside-button mt-4">
                        Save
                    </button>
                </div>
                {
                    !drink ? <div className="recipe-content-loader-container"></div> : (
                        <div className="recipe-content-container">
                            <h1 className="text-center">Ingredients</h1>
                            <hr className="bg-dark" />
                            <div className="text-center">
                                <div className="row justify-content-center">
                                    <div className="col-6">
                                        {drink.strIngredient1 !== "" ? <p>{drink.strIngredient1}</p> : ""}
                                        {drink.strIngredient2 !== "" ? <p>{drink.strIngredient2}</p> : ""}
                                        {drink.strIngredient3 !== "" ? <p>{drink.strIngredient3}</p> : ""}
                                        {drink.strIngredient4 !== "" ? <p>{drink.strIngredient4}</p> : ""}
                                        {drink.strIngredient5 !== "" ? <p>{drink.strIngredient5}</p> : ""}
                                        {drink.strIngredient6 !== "" ? <p>{drink.strIngredient6}</p> : ""}
                                        {drink.strIngredient7 !== "" ? <p>{drink.strIngredient7}</p> : ""}
                                        {drink.strIngredient8 !== "" ? <p>{drink.strIngredient8}</p> : ""}
                                    </div>
                                    {
                                        drink.strIngredient9 !== "" ? (
                                            <div className="col-">
                                                {drink.strIngredient9 !== "" ? <p>{drink.strIngredient9}</p> : ""}
                                                {drink.strIngredient10 !== "" ? <p>{drink.strIngredient10}</p> : ""}
                                                {drink.strIngredient11 !== "" ? <p>{drink.strIngredient11}</p> : ""}
                                                {drink.strIngredient12 !== "" ? <p>{drink.strIngredient12}</p> : ""}
                                                {drink.strIngredient13 !== "" ? <p>{drink.strIngredient13}</p> : ""}
                                                {drink.strIngredient14 !== "" ? <p>{drink.strIngredient14}</p> : ""}
                                                {drink.strIngredient15 !== "" ? <p>{drink.strIngredient15}</p> : ""}
                                            </div>
                                        ) : ""
                                    }
                                </div>
                            </div>
                            <h1 className="mt-2 text-center">Instructions</h1>
                            <hr className="bg-dark" />
                            <div className="text-center">
                                <p>
                                    {drink.strInstructions}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Index;