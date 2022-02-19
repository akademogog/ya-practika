import style from './index.module.css'
import CustomScrollBar from '../CustomScrollBar/index'
import BurgerConstructorDragerItem from '../BurgerConstructorDragerItem/index'
import burgersInredientsArray from '../../utils/data.js';

function BurgerConstructorDragerBlock() {
   return (
      <div className={style.constructor}>
         <CustomScrollBar autoHeightMax={464}>
            {burgersInredientsArray.map(el => {
               if (el.type !== 'bun') {
                  return <BurgerConstructorDragerItem name={el.name} price={el.price} image={el.image} key={el._id} />;
               } else {
                  return '';
               }
            })}
         </CustomScrollBar>
      </div>
   );
}

export default BurgerConstructorDragerBlock;