import { CurrencyIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'
import BurgerConstructorDragerBlock from '../BurgerConstructorDragerBlock/index'

function BurgerConstructor() {
   return (
      <div className={style.constructor}>
         <div className={style.wrapper}>
            <div className={style.element}>
               <ConstructorElement
                  type="top"
                  isLocked={true}
                  text="Краторная булка N-200i (верх)"
                  price={200}
                  thumbnail={'https://code.s3.yandex.net/react/code/cheese.png'}
               />
            </div>
            
            <BurgerConstructorDragerBlock/>
            
            <div className={style.element}>
               <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text="Краторная булка N-200i (низ)"
                  price={200}
                  thumbnail={'https://code.s3.yandex.net/react/code/cheese.png'}
               />
            </div>
         </div>
         
         <div className={style.order}>
            <div className={style.price}>
               <span className="text text_type_digits-medium">{610}</span>
               <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
               Нажми на меня
            </Button>
         </div>
      </div>
   );
}

export default BurgerConstructor;