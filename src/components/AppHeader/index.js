import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './index.module.css'

function AppHeader() {
    const state = {
        constructorOpen: true,
        lentaOpen: false,
        accountOpen: false,
    }

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.containerLeft}>
                    <button className={`${style.btn} ${state.constructorOpen ? style.active : ''}`}  size="large">
                        <BurgerIcon type={`${state.constructorOpen ? 'primary' : 'secondary'}`} />
                        <span className="text text_type_main-default">
                            Конструктор
                        </span>
                    </button>

                    <button className={style.btn} type="secondary" size="large">
                        <ListIcon type={`${state.lentaOpen ? 'primary' : 'secondary'}`} />
                        <span className="text text_type_main-default">
                            Лента заказов
                        </span>
                    </button>
                </div>
                
                <a href="#" className={style.logo}>
                    <Logo />
                </a>

                <button className={style.btn} type="secondary" size="large">
                    <ProfileIcon type={`${state.accountOpen ? 'primary' : 'secondary'}`} />
                    <span className="text text_type_main-default">
                        Личный кабинет
                    </span>
                </button>
            </div>
            
        </header>
    );
}

export default AppHeader;