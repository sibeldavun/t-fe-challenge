import React from 'react'
import LinksContext from '../../context/LinksContext';
import { useContext } from 'react';
import { useSearchParams } from "react-router-dom";
import Link from '../Link';
import styles from './styles.module.css';



function LinkList() {
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
    console.log(sort)
    if (sort === "nameascending") {
        data.sort((a, b) => {
            return a["fullName"].localeCompare(b["fullName"])

        })
    } else {
        data.sort((a, b) => {
            return b["fullName"].localeCompare(a["fullName"])

        })
    }

    let pageNumber = searchParams.get("page")
    pageNumber = pageNumber === null ? 1 : pageNumber
    const indexOfLastRecord = pageNumber * 5 //5 = recordsperpage
    const indexOfFirstRecord = indexOfLastRecord - 5

    data = data.slice(indexOfFirstRecord, indexOfLastRecord)




    return (
        <div>
            <ul>
                {
                    data.map((item, index) => {
                        return <li className={styles.item} key={index}><Link values={item}></Link> </li>
                    })
                }

            </ul>
        </div>
    )
}

export default React.memo(LinkList);