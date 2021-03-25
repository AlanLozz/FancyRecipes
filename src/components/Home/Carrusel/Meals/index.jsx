import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Left from '../../../../assets/icons/ArrowLeft.svg';
import Right from '../../../../assets/icons/ArrowRight.svg';
import '../styles.css';

const Index = ({ categories, title }) => {
    const carrusel = document.getElementById(`slide${title}`);
    const [position, setPosition] = useState(0);
    
    const slideLeft = () => {
        setPosition(position-500);
    };

    const slideRight = () => {
        setPosition(position+500) ;
    };

    const history = useHistory();

    useEffect(()=>{
        if(position!==0){
            carrusel.scroll({
                left: position,
                behavior:"smooth"
            })
        }
    },[position])

    return (
        <div className="mb-4">
            <h2>{title}</h2>
            <div className="carrusel">
                <div className="carrusel-previous">
                    <button className="carrusel-button" onClick={e=>slideLeft()}>
                        <img src={Left} alt="" />
                    </button>
                </div>
                <div className="carrusel-container" id={"slide"+title}>
                    {
                        categories.map((c, i) => {
                            return (
                                <div className="carrusel-item" key={i} onClick={e=>history.push(`/recipelist/${c.strCategory}`)}>
                                    <div className="card-meal">
                                        <div className="card-meal-image">
                                            <img src={c.strCategoryThumb} alt={c.strCategory} />
                                        </div>
                                        <div className="line"></div>
                                        <h4 className="card-meal-title">
                                            {c.strCategory}
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="carrusel-next">
                    <button className="carrusel-button" onClick={e=>slideRight()}>
                        <img src={Right} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index