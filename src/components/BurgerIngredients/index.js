import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'
import IngredientsBlock from '../IngredientsBlock/index'
import CustomScrollBar from '../CustomScrollBar/index'
import burgersInredientsArray from '../../utils/data.js';

function BurgerIngredients() {
   const [current, setCurrent] = React.useState(0);
   const burgersInredientsFiltred = [];
   const burgersInredientsFiltredFunc = () => {
      burgersInredientsArray.forEach(element => {
         let typeRussian;
         if (element['type'] === 'bun') {
         typeRussian = 'Булки';
         }
         if (element['type'] === 'main') {
         typeRussian = 'Начинки';
         }
         if (element['type'] === 'sauce') {
         typeRussian = 'Соусы';
         }

         const typeObj = {
         "_id": element['_id'],
         "name": element['name'],
         "type": element['type'],
         "proteins": element['proteins'],
         "fat": element['fat'],
         "carbohydrates": element['carbohydrates'],
         "calories": element['calories'],
         "price": element['price'],
         "image": element['image'],
         "image_mobile": element['image_mobile'],
         "image_large": element['image_large'],
         "__v": element['__v']
         };
         const resultIngredientObj = {
         type: element['type'],
         ingredients: [ typeObj ],
         "typeRussian": typeRussian,
         };
   
         if (burgersInredientsFiltred.length === 0) {
         burgersInredientsFiltred.push(resultIngredientObj);
         } else {
         let flag = false;
   
         burgersInredientsFiltred.forEach((el, index) => {
               if (el.type === resultIngredientObj.type) {
               flag = index;
               }
         });
   
         if (flag === false) {
               burgersInredientsFiltred.push(resultIngredientObj);
         } else {
               burgersInredientsFiltred[flag].ingredients.push(
               typeObj
               );
         }
         }            
      });
   }
   const logRef = (number) => {
      let block = document.querySelector(`#block${number}`);
      block.parentNode.scroll({ 
         top: block.offsetTop,
         left: 0, 
         behavior: 'smooth' 
       });
   }

   burgersInredientsFiltredFunc();

   return (
      <div className={style.constructor}>
         <h2 className="text text_type_main-large">Соберите бургер</h2>
         <div className={style.tabsHeader}>
            {burgersInredientsFiltred.map((el,index) => (
               <div key={index} className={style.tabBtn}>
                  <Tab value={index} active={current === index} onClick={() => {logRef(index); setCurrent(index)}}>
                     {el.typeRussian}
                  </Tab>
               </div> 
            ))}    
         </div>
         <div className={`${style.tabsContent}`}>
            <CustomScrollBar autoHeightMax={664}>
               {burgersInredientsFiltred.map((el, index) => (
                  <IngredientsBlock
                     id={`block${index}`}
                     title={el.typeRussian}
                     key={el.type}
                     ingredients={el.ingredients}
                  />
               ))}
            </CustomScrollBar>
         </div>
      </div>
   );
}

export default BurgerIngredients;