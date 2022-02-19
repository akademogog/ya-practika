import { CurrencyIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'
import BurgerConstructorDragerBlock from '../BurgerConstructorDragerBlock/index'
import burgersInredientsArray from '../../utils/data.js';

function BurgerConstructor() {
   let firstBun = burgersInredientsArray.find(el => el.type === 'bun');
   return (
      <div className={style.constructor}>
         <div className={style.wrapper}>
            <div className={style.element}>
               <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={firstBun.name}
                  price={firstBun.price}
                  thumbnail={firstBun.image}
               />
            </div>
            
            <BurgerConstructorDragerBlock/>
            
            <div className={style.element}>
               <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={firstBun.name}
                  price={firstBun.price}
                  thumbnail={firstBun.image}
               />
            </div>
         </div>
         
         <div className={style.order}>
            <div className={style.price}>
               <span className="text text_type_digits-medium">{610}</span>
               <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
               оформить заказ
            </Button>
         </div>
      </div>
   );
}

export default BurgerConstructor;