import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
    </div>
  );
};

export default Recipe;
