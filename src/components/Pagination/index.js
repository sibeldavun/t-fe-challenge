import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css';


function Pagination({ pageCount }) {
    let [searchParams, setSearchParams] = useSearchParams();
    const [pageNumber, setPageNumber] = useState(1);

    const pages = [];

    if (pageCount > 6) {
        for (let i = 1; i <= 3; i++) {
            pages.push(i);
        }

        if (pageNumber - 2 > 4 && pageNumber + 2 < pageCount - 3) {
            pages.push(0);
            for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
                pages.push(i);
            }
            pages.push(0)
        }
        else if (pageNumber - 2 > 4) { // 1,2,3,0, 6,7,8,9,10 ,11,12,13
            pages.push(0);
            for (let i = pageNumber - 2; i <= pageCount - 3; i++) {
                pages.push(i);
            }
        }
        else if (pageNumber + 2 < pageCount - 3) {  // 1,2,3,    4,5,6,7,8,0,   11,12,13
            for (let i = 4; i <= pageNumber + 2; i++) {
                pages.push(i);
            }
            pages.push(0);
        }
        else {
            for (let i = 4; i <= pageCount - 3; i++) {
                pages.push(i);
            }
        }

        for (let i = pageCount - 2; i <= pageCount; i++) {
            pages.push(i);
        }
    }
    else {
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
    }


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
        // eslint-disable-next-line
    }, [pageNumber])

    const decrease = () => {
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }

    const clickPage = (i) => {
        if (pageNumber === i) return
        setPageNumber(i)

    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <button hidden={pageNumber === 1 ? true : false} className={styles.paginationBtn} onClick={decrease}>Previous</button>
            <ul style={{ display: "flex", flexDirection: "row" }}>
                {
                    pages.map((page, index) => {
                        if (page === 0) {
                            return <li key={index}>...</li>
                        }
                        else {
                            return <li key={index} onClick={()=>{clickPage(page)}} className={`${styles.page} ${page === pageNumber ? styles.activePage : ""}`}>
                                {page}
                            </li>
                        }

                    })
                }
            </ul>

            <button hidden={pageNumber >= pageCount ? true : false} className={styles.paginationBtn} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
        </div>
    )
}
export default React.memo(Pagination);