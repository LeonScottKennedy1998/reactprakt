import React from 'react';
import '../styles/Recipe.css';

const Recipe = ({ title, ingredients, steps, image }) => {
    return (
        <div className="recipe">
            <h2>{title}</h2>
            <div className="text">
                <h3>Ингредиенты:</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Приготовление:</h3>
                <ol>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="image">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default Recipe;
