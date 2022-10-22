import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function AddNewRecord() {
    return (
        <div >
            <Link to="/add-link"><button className={styles.addItemBtn}>Add new record</button></Link>
        </div>
    )
}
export default AddNewRecord;