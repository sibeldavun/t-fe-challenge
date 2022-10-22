import React, { useState } from 'react';
import styles from './styles.module.css'


function Carousel() {
    const [items, setItems] = useState([
        "http://picsum.photos/id/237/300/150",
        "http://picsum.photos/id/238/300/150",
        "http://picsum.photos/id/239/300/150",
        "http://picsum.photos/id/240/300/150",
        "http://picsum.photos/id/241/300/150"])

    const clickRight = () => {
        let arr = items.slice()
        let temp = arr.shift()
        arr.push(temp)
        setItems(arr)
    }

    const clickLeft = () => {
        let arr = items.slice()
        let temp = arr.pop()
        arr.unshift(temp)
        setItems(arr)
    }

    return (
        <div className={styles.carousel}>
            <div>
                <button className={`${styles.leftBtn} ${styles.btn}`} onClick={clickLeft}>&#8592;</button>
            </div>
            <div className={styles.carouselItems}>
                {
                    items.slice(0, 3).map((item) => {
                        return (
                            <div key={item} className={styles.carouselImg}>
                                <input type="image" src={item} alt="Carousel Image" loading="lazy" />
                                <div className={styles.imgText}>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</div>
                                <div className={styles.lastText}>1h ago · by Troy Corlson</div>
                            </div>)
                    }
                    )
                }
            </div>

            <div>
                <button className={styles.btn} onClick={clickRight}>&#8594;</button>
            </div>
        </div>
    )
}

export default Carousel;