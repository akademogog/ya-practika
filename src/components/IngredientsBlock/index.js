import React from 'react';
import style from './index.module.css'
import IngredientCard from '../IngredientCard/index'
import PropTypes from 'prop-types';

function IngredientsBlock({ title, ingredients, id }) {
    const ingrBlock = React.useRef(null);
    
    return (
        <div className={style.block} ref={ingrBlock} id={id}>
            <h3 className="text text_type_main-medium">{title}</h3>
            <div className={style.wrapper}>
                {ingredients.map(el => (
                    <IngredientCard
                        key={el._id}
                        image={el.image}
                        name={el.name}
                        price={el.price}
                    />
                ))}
            </div>
        </div>
    );
}

const IngredientsProp = PropTypes.shape({
    "_id": PropTypes.string,
    "name": PropTypes.string,
    "type": PropTypes.string,
    "proteins": PropTypes.number,
    "fat": PropTypes.number,
    "carbohydrates": PropTypes.number,
    "calories": PropTypes.number,
    "price": PropTypes.number,
    "image": PropTypes.string,
    "image_mobile": PropTypes.string,
    "image_large": PropTypes.string,
    "__v": PropTypes.number,
});

IngredientCard.propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(IngredientsProp.isRequired)
};

export default IngredientsBlock;