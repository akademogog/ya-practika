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
                    <a href="#" className={`${style.btn} ${state.constructorOpen ? style.active : ''}`}>
                        <BurgerIcon type={`${state.constructorOpen ? 'primary' : 'secondary'}`} />
                        <span className="text text_type_main-default">
                            Конструктор
                        </span>
                    </a>

                    <a href="#" className={style.btn}>
                        <ListIcon type={`${state.lentaOpen ? 'primary' : 'secondary'}`} />
                        <span className="text text_type_main-default">
                            Лента заказов
                        </span>
                    </a>
                </div>
                
                <a href="#" className={style.logo}>
                    <Logo />
                </a>

                <a href="#" className={style.btn}>
                    <ProfileIcon type={`${state.accountOpen ? 'primary' : 'secondary'}`} />
                    <span className="text text_type_main-default">
                        Личный кабинет
                    </span>
                </a>
            </div>
        </header>
    );
}

export default AppHeader;