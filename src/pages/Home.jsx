import React from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { useEffect, useState } from 'react';
import Sceleton from '../components/PizzaBlock/Sceleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState(0);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629a49df6f8c03a9785417b6.mockapi.io/pizza/items?category=${categoryId}`
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeCategory={(id) => setSortType(id)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
