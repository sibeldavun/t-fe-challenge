import React from 'react'
import styles from './styles.module.css'
import moment from 'moment';


function Link({ values }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.pinBox}>
          <input className={styles.img} type="image" src={`pin.png`} alt="Pin Image" loading="lazy" />
        </div>
        <div className={styles.locationInfo}>
          <div style={{ fontWeight: "bold" }}>
            {values.city}
          </div>
          <div className={styles.grayColor}>
            {values.country}
          </div>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div className={styles.grayColor}>
          {values.fullName}
        </div>
        <div style={{ fontWeight: "bold", marginTop: "2px" }}>
          {moment(values.createDate).format('DD/MM/YYYY')}
        </div>
      </div>
    </div>
  )
}

export default Link;