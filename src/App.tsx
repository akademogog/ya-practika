import AppHeader from './components/AppHeader/index.js';
import BurgerIngredients from './components/BurgerIngredients/index.js';
import BurgerConstructor from './components/BurgerConstructor/index.js';
import burgersInredientsArray from './utils/data.js';
import './App.css';

function App() {
  const burgersInredientsFiltred:any = [];
  const burgersInredientsFiltredFunc = () => {
    burgersInredientsArray.forEach(element => {
      let typeRussian;
      if (element['type'] === 'bun') {
        typeRussian = 'Булки';
      }
      if (element['type'] === 'main') {
        typeRussian = 'Начинки';
      }
      if (element['type'] === 'sauce') {
        typeRussian = 'Соусы';
      }

      const typeObj = {
        "_id": element['_id'],
        "name": element['name'],
        "type": element['type'],
        "proteins": element['proteins'],
        "fat": element['fat'],
        "carbohydrates": element['carbohydrates'],
        "calories": element['calories'],
        "price": element['price'],
        "image": element['image'],
        "image_mobile": element['image_mobile'],
        "image_large": element['image_large'],
        "__v": element['__v']
      };
      const resultIngredientObj = {
        type: element['type'],
        ingredients: [ typeObj ],
        "typeRussian": typeRussian,
      };
  
      if (burgersInredientsFiltred.length === 0) {
        burgersInredientsFiltred.push(resultIngredientObj);
      } else {
        let flag:any = false;
  
        burgersInredientsFiltred.forEach((el:any, index:number)=> {
            if (el.type == resultIngredientObj.type) {
              flag = index;
            }
        });
  
        if (flag === false) {
            burgersInredientsFiltred.push(resultIngredientObj);
        } else {
            burgersInredientsFiltred[flag].ingredients.push(
              typeObj
            );
        }
      }            
    });
  }
  burgersInredientsFiltredFunc();

  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className='container container_flex'>
          <BurgerIngredients burgersInredientsFiltred={burgersInredientsFiltred} />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
