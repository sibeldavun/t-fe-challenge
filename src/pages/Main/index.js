import React, { useEffect } from 'react';
import AddNewRecord from '../../components/AddNewRecord';
import Brand from '../../components/Brand';
import styles from './styles.module.css'
import SearchBox from '../../components/SearchBox';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Main() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <div className={styles.addNewRecord}>
        <AddNewRecord />
      </div>
      <div className={styles.brand}>
        <Brand />
      </div>
      <div className={styles.searchTitle}>
        <p className={styles.text}>Find in records</p>
        <SearchBox />
      </div>
      <div className={styles.newsBox}>
        <div className={styles.newsTitle}>
          <p className={styles.text}>Top News</p>
        </div>
        <Carousel />
      </div>
      <Footer />
    </div>
  )
}
export default Main;