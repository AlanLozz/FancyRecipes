import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'

const Index = () => {
    const [data, setData] = useState(false);
    const history = useHistory();
    const { type, id } = useParams();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${id.replace(" ", "_")}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.drinks));
    }, []);

    return (
        <div>
            <h1>{id}</h1>
            <div className="card-container">
                {
                    data ?
                        data.map((d, i) => {
                            return (
                                <div className="card-recipe" key={i} onClick={e=> history.push(`/Coctel/${d.idDrink}`)}>
                                    <div className="card-recipe-image">
                                        <img src={d.strDrinkThumb} alt={d.strDrink} />
                                    </div>
                                    <div className="card-recipe-title">
                                        <h5>
                                            {d.strDrink}
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
                }
            </div>
        </div>
    )
}

export default Index;