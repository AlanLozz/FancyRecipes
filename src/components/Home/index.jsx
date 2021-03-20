import React, { useEffect, useState } from 'react';
import Carrusel from './Carrusel';
import Loader from './Carrusel/Loader';

const Index = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(res => setCategories(res.categories));
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-12">
                    { !categories ? <Loader/> : <Carrusel categories={categories} title="Categories"/> }
                </div>
            </div>
        </>
    )
}

export default Index
