import {useState} from 'react'
import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css'

function SortBox() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("")

  const changeSort =(event)=>{
    setSort(event.target.value)
    
    searchParams.delete("sort")
    searchParams.append("sort", event.target.value)
    setSearchParams(searchParams)
  }
  return (

    
    <div>

      <select  className={styles.sortBoxBtn}  onChange={changeSort} value={sort} >
        <option hidden selected><span style={{color:"black"}}>&#8595;&#8593; Order By</span></option>
        <option value="nameascending">Name ascending</option>
        <option value="namedescending">Name descending</option>
      </select>

    </div>
  )
}

export default SortBox