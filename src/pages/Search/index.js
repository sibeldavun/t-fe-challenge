
import { Link } from 'react-router-dom';
import LinkList from '../../components/LinkList';
import Pagination from '../../components/Pagination';
import SearchBox from '../../components/SearchBox';
import SortBox from '../../components/SortBox';
import styles from './styles.module.css';

function Search() {

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div>
            <input className={styles.img} type="image" src={`title.jpg`} alt="Title Image" loading="lazy" />
          </div>
          <SearchBox />
        </div>
        <div >
          <Link to="/add-link"><button className={styles.addItemBtn}>Add new record</button></Link>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sortBox}>
          <SortBox />
        </div>
        <LinkList />
      </div>

      <div className={styles.paginationBox}>
      <Pagination />
      </div>

    </div>
  )
}

export default Search;