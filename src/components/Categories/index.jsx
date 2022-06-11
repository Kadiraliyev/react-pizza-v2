import React from 'react';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export default function Categories({ value, onChangeCategory }) {
  return (
    <div className='categories'>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
