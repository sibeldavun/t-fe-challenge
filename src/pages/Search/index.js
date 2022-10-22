import LinkList from '../../components/LinkList';
import Pagination from '../../components/Pagination';
import SearchBox from '../../components/SearchBox';
import SortBox from '../../components/SortBox';
import styles from './styles.module.css';
import { useContext } from 'react';
import LinksContext from '../../context/LinksContext';
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import AddNewRecord from '../../components/AddNewRecord';
import Brand from '../../components/Brand';

function Search() {
  useEffect(() => {
    document.title = "Search";
  }, []);

  const { links } = useContext(LinksContext)


  let [searchParams] = useSearchParams();

  let filter = searchParams.get("q")
  filter = filter === null ? "" : filter

  let data = links.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  })

  let sort = searchParams.get("sort")
  if (sort === "nameascending") {
    data.sort((a, b) => {
      return a["fullName"].localeCompare(b["fullName"])
    })
  } else if (sort === "namedescending") {
    data.sort((a, b) => {
      return b["fullName"].localeCompare(a["fullName"])
    })
  } else if (sort === "yearascending") {
    data.sort((a, b) => {
      return a["createDate"] - b["createDate"]
    })

  } else if (sort === "yeardescending") {
    data.sort((a, b) => {
      return a["createDate"] - b["createDate"]
    }).reverse()
  }
  let pageNumber = searchParams.get("page")
  pageNumber = pageNumber === null ? 1 : pageNumber
  const indexOfLastRecord = pageNumber * 5 //5 = recordsperpage
  const indexOfFirstRecord = indexOfLastRecord - 5

  const totalPageCount = Math.ceil(data.length / 5)

  data = data.slice(indexOfFirstRecord, indexOfLastRecord)


  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Brand />
          <SearchBox />
        </div>
        <AddNewRecord />
      </div>
      {
        links.length > 0 ? (
          <div className={styles.container}>
            <div className={styles.sortBox}>
              <SortBox />
            </div>
            <LinkList items={data} />
            <div className={styles.paginationBox}>
              <Pagination pageCount={totalPageCount} />
            </div>
          </div>) : ""
      }
    </div>
  )
}
export default Search;