import React from 'react'
import styles from './styles.module.css'


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
          <div>
            {values.country}
          </div>
        </div>


      </div>
      <div>
        <div>
          {values.fullName}
        </div>
        <div>
          {values.fullName}
        </div>
      </div>
    </div>


  )
}

export default Link