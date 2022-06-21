import React from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { useEffect, useState } from 'react';
import Sceleton from '../components/PizzaBlock/Sceleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629a49df6f8c03a9785417b6.mockapi.io/pizza/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}&${search}`
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeCategory={(item) => setSortType(item)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;
