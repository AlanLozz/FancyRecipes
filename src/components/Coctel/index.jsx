import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Index = () => {
    const [drink, setDrink] = useState(false);
    const {id} = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    useEffect(()=>{
        fetch(url)
            .then( res => res.json())
            .then( res => setDrink(res.drinks));
    },[]);

    return (
        <div>
            En construcción...
        </div>
    )
}

export default Index;