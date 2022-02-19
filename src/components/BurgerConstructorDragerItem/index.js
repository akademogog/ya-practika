import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'
import PropTypes from 'prop-types';

function BurgerConstructorDragerItem({ name, price, image }) {
   return (
      <div className={style.block}>
         <div className={style.icon}>
            <DragIcon type="primary" />
         </div>
         <ConstructorElement
            text={name.substr(0, 20) + '...'}
            price={price}
            thumbnail={image}
         />
      </div>
   );
}

BurgerConstructorDragerItem.propTypes = {
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired
};

export default BurgerConstructorDragerItem;