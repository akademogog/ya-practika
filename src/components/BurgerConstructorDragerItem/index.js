import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'

function BurgerConstructorDragerItem() {
   return (
      <div className={style.block}>
         <div className={style.icon}>
            <DragIcon type="primary" />
         </div>
         <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/cheese.png'}
         />
      </div>
   );
}

export default BurgerConstructorDragerItem;