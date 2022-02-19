import AppHeader from '../AppHeader/index.js';
import BurgerIngredients from '../BurgerIngredients/index.js';
import BurgerConstructor from '../BurgerConstructor/index.js';
import style from './App.module.css';

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <div className={`${style.container} ${style.containerFlex}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
