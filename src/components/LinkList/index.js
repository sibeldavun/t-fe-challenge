import React from 'react';
import Link from '../Link';
import styles from './styles.module.css';

function LinkList({ items }) {

    return (
        <div>
            <ul>
                {
                    items.map((item) => {
                        return <li className={styles.item} key={item.id}><Link values={item}></Link> </li>
                    })
                }
            </ul>
        </div>
    )
}
export default React.memo(LinkList);