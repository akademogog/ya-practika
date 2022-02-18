import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'

function ingredientCard({ image, name, price }) {
    let count = 0;
    return (
        <div className={style.card}>
            {count ? <Counter count={count} size="default" /> : ''}
            <img className={style.img} src={image} />
            <div className={style.price}>
                <span className="text text_type_digits-default">{price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={'text text_type_main-default ' + style.text}>{name}</p>
        </div>
    );
}

export default ingredientCard;