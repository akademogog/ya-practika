import style from './index.module.css'
import IngredientCard from '../IngredientCard/index'

function IngredientsBlock({ title, ingredients }) {
    return (
        <div className={style.block}>
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

export default IngredientsBlock;