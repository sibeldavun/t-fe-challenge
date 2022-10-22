import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import LinksContext from '../../context/LinksContext';

function SearchBox() {
    const { links } = useContext(LinksContext)

    const [data, setData] = useState([])
    const [focused, setFocused] = useState(false)

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();

    const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");

    useEffect(() => {
        let items = links.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(searchInput.toLocaleLowerCase())
            );
        })

        items = items.slice(0, 3);

        setData(items)
    }, [searchInput,links])

    const changeInput = (event) => {
        setSearchInput(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        navigateToSearch();
    }

    const navigateToSearch = () => {
        const q = searchInput === "" ? "" : `?q=${searchInput}`
        navigate({
            pathname: '/search',
            search: q
        })
    }

    return (
        <div>
            <form className={styles.form} onSubmit={submit}>
                <input className={styles.searchInput} value={searchInput} onChange={changeInput}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <button className={styles.searchBtn} type='submit'>Search</button>
            </form>
            <div className={styles.searchTable}>
                {
                    searchInput !== "" && data.length !== 0 && focused === true ? (<div className={styles.table}> {

                        (
                            (data.map((item) => {
                                return <div className={styles.cardLeft} key={item.id} >
                                    <div className={styles.pinBox}>
                                        <input className={styles.img} type="image" src={`pin.png`} alt="Pin Image" loading="lazy" />
                                    </div>
                                    <div className={styles.locationInfo}>
                                        <div style={{ fontWeight: "bold" }}>
                                            {item.city}
                                        </div>
                                        <div className={styles.grayColor}>
                                            {item.country}
                                        </div>
                                    </div>
                                </div>
                            }))
                        )
                    }
                        {
                            <div className={styles.showMore}><button onClick={navigateToSearch} className={styles.showMoreBtn}>Show More...</button></div>
                        }
                    </div>) : ""

                }


            </div>
        </div>
    )
}
export default React.memo(SearchBox);