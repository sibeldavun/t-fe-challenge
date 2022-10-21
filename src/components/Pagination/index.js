import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css';

function Pagination() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        if (pageNumber === 1) {
            searchParams.delete("page")
            setSearchParams(searchParams)


        }
        else {
            searchParams.delete("page")
            searchParams.append("page", pageNumber)
            setSearchParams(searchParams)
        }
    }, [pageNumber])

    const decrease = () => {
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }



    return (
        <div>
            <button className={styles.paginationBtn} onClick={decrease}>Previous</button>
            <button className={styles.paginationBtn} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
        </div>
    )
}

export default Pagination;