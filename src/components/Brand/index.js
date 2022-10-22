import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Brand() {
  return (
    <div>
      <Link to="/"> <input className={styles.img} type="image" src={`title.jpg`} alt="Title Image" loading="lazy" /></Link>
    </div>
  )
}
export default Brand;