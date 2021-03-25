import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Carrusel from './Carrusel/Meals';
import Coctels from './Coctels';
import Loader from './Carrusel/Loader';

const Index = () => {
    const history = useHistory();

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(res => setCategories(res.categories));
    }, []);

    const getRandom = () => {
        let temp = Math.floor(Math.random() * 2);
        if (temp == 0) {
            history.push("/recipe/0/true")
        } else {
            history.push("/coctel/0/true")
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="jumbotron shadow">
                        <h1 className="display-4 text-center color-fancy">
                            Use the new feature!
                        </h1>
                        <p className="lead">Don't know what to prepare?</p>
                        <hr className="my-4" />
                        <p>Use the random tool to find an awesome coctel or recipe</p>
                        <button className="btn btn-primary btn-lg" onClick={e=> getRandom()}>Get Random Meal or Coctel</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {!categories ? <Loader /> : <Carrusel categories={categories} title="Categories" />}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Coctels title="Coctels" />
                </div>
            </div>
        </>
    )
}

export default Index
