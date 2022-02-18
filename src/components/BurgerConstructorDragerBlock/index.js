import style from './index.module.css'
import CustomScrollBar from '../CustomScrollBar/index'
import BurgerConstructorDragerItem from '../BurgerConstructorDragerItem/index'

function BurgerConstructorDragerBlock() {
   return (
      <div className={style.constructor}>
         <CustomScrollBar autoHeightMax={464}>
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
            <BurgerConstructorDragerItem />
         </CustomScrollBar>
      </div>
   );
}

export default BurgerConstructorDragerBlock;