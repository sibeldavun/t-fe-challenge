import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css';


function SearchBox() {

    let [searchParams, setSearchParams] = useSearchParams();

    const [searchInput, setSearchInput] = useState("");
    const changeInput = (event) => {
        setSearchInput(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        searchParams.delete("q")
        searchParams.append("q", searchInput)
        setSearchParams(searchParams)


    }
    return (
        <div>
            <form className={styles.form} onSubmit={submit}>
                <input className={styles.searchInput} value={searchInput} onChange={changeInput} />
                <button className={styles.searchBtn} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBox;