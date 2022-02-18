import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'
import IngredientsBlock from '../IngredientsBlock/index'
import CustomScrollBar from '../CustomScrollBar/index'
import PropTypes from 'prop-types';

function BurgerIngredients({burgersInredientsFiltred}) {
   const [current, setCurrent] = React.useState(0)

   return (
      <div className={style.constructor}>
         <h2 className="text text_type_main-large">Соберите бургер</h2>
         <div className={style.tabsHeader}>
            {burgersInredientsFiltred.map((el,index) => (
               <div key={index} className={style.tabBtn}>
                  <Tab value={index} active={current === index} onClick={setCurrent}>
                     {el.typeRussian}
                  </Tab>
               </div> 
            ))}    
         </div>
         <div className={`${style.tabsContent}`}>
            <CustomScrollBar autoHeightMax={664}>
               {burgersInredientsFiltred.map((el, index) => {
                  if (current === index) {
                     return <IngredientsBlock
                        title={el.typeRussian}
                        key={el.type}
                        ingredients={el.ingredients}
                     />
                  }
               })}
            </CustomScrollBar>
         </div>
      </div>
   );
}

const IngredientsProp = PropTypes.shape({
   "_id": PropTypes.string.isRequired,
   "name": PropTypes.string.isRequired,
   "type": PropTypes.string.isRequired,
   "proteins": PropTypes.number,
   "fat": PropTypes.number,
   "carbohydrates": PropTypes.number,
   "calories": PropTypes.number,
   "price": PropTypes.number.isRequired,
   "image": PropTypes.string,
   "image_mobile": PropTypes.string,
   "image_large": PropTypes.string,
   "__v": PropTypes.number
});

const BurgerIngredientsProp = PropTypes.shape({
   type: PropTypes.string.isRequired,
   typeRussian: PropTypes.string.isRequired,
   ingredients: PropTypes.arrayOf(IngredientsProp.isRequired),
});

BurgerIngredients.propTypes = {
   burgersInredientsFiltred: PropTypes.arrayOf(BurgerIngredientsProp.isRequired)
};

export default BurgerIngredients;