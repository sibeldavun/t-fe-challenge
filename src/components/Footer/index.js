import React from 'react';
import styles from './styles.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.footerImg}>
                    <input className={styles.img} type="image"
                        src="http://picsum.photos/id/0/200/150" alt="Carousel Image" loading="lazy" />
                </div>
                <div className={styles.footerText}>
                    <div>İletişim</div>
                    <div>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No:151/1F İç Kapı No: 2B03, 34220 Esenler/İstanbul</div>
                    <div className={styles.footerEmailInfo}>Email: bilgi@tesodev.com</div>
                </div>
                <div className={styles.footerMap}>
                    <div className={styles.mapouter}>
                        <div className={styles.gmapCanvas}>
                            <iframe
                                title='Tesodev map location'
                                id="gmap_canvas"
                                src="http://maps.google.com/maps?q=tesodev&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0">
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;