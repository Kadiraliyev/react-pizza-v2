import React from 'react';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Страница не найдена</h1>
    </div>
  );
}
