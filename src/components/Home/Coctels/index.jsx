import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Index = ({ drinks, title }) => {
    const [categorie, setCategorie] = useState("c=list");
    const [categories, setCategories] = useState(null);

    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?";

    useEffect(()=>{
        fetch(url+categorie)
            .then(res => res.json())
            .then(res => setCategories(res.drinks))
    },[categorie])

    return (
        <div className="mb-4">
            <h2>{title}</h2>
            <div className="card shadow rounded">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <h4>Select a Coctel Filter</h4>
                            <div className="list-group">
                                <button className="list-group-item list-group-item-action" onClick={e => setCategorie("c=list")}>Categories</button>
                                <button className="list-group-item list-group-item-action" onClick={e => setCategorie("g=list")}>Glasses</button>
                                <button className="list-group-item list-group-item-action" onClick={e => setCategorie("a=list")}>Alcoholic Filters</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="list-group list-group-flush overflow-auto" style={{maxHeight:"200px", height:"fit-content"}}>
                                {
                                    categories ? 
                                        categories.map((c,i)=>{
                                            return(
                                            <a 
                                                href={`/coctellist/${categorie.split('=',2)[0]}/${c.strCategory ? c.strCategory : c.strGlass ? c.strGlass : c.strAlcoholic}`}
                                                key={i} 
                                                className="list-group-item list-group-item-action">
                                                {
                                                    c.strCategory ? <span>{c.strCategory}</span> : c.strGlass ? <span>{c.strGlass}</span> : <span>{c.strAlcoholic}</span>
                                                }
                                            </a>)
                                        })
                                    : <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;