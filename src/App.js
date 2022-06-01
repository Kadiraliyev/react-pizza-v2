import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              <PizzaBlock title='Моцарелла' price={350} />
              <PizzaBlock title='Пепперони' price={450} />
              <PizzaBlock title='Курийный' price={280} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
