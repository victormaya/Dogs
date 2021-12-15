import React from 'react';
import styles from './Input.module.css';
// import { Container } from './styles';

function Input({ label, type, name }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} id={name} name={name} type={type} />
      <p className={styles.error}>Error</p>
    </div>
  );
}

export default Input;
