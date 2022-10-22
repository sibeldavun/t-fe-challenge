import { useContext } from 'react';
import { useFormik } from 'formik';
import validations from './validations';
import LinksContext from '../../context/LinksContext';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import Brand from '../../components/Brand';

function AddLink() {
    useEffect(() => {
        document.title = "Add-Link";
    }, []);
    const { links, setLinks } = useContext(LinksContext)

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            fullName: '',
            country: '',
            city: '',
            email: '',
        },

        onSubmit: (values, { resetForm }) => {
            setLinks([...links, { ...values, id: uuid(), createDate: new Date() }])
            resetForm({ values: '' })
        },
        validationSchema: validations,
    });

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Brand />
            </div>
            <div className={styles.card}>
                <div>
                    <div><NavLink to="/search" className={styles.returnBack}><span>&#8592;</span>Return to List Page</NavLink></div>
                    <form className={styles.formBox} onSubmit={handleSubmit}>
                        <div className={styles.cardDetail}>
                            <label className={`${styles.lbl} ${errors.fullName && touched.fullName && styles.redLbl}`} >Name Surname</label>
                            <input className={`${styles.cardInput} ${errors.fullName && touched.fullName && styles.redInput}`} name='fullName' placeholder='Enter name and surname' onBlur={handleBlur} onChange={handleChange} value={values.fullName} />
                            {errors.fullName && touched.fullName &&
                                (<div className={styles.errorMessage}>{errors.fullName} </div>)}
                        </div>
                        <div className={styles.cardDetail}>
                            <label className={`${styles.lbl} ${errors.country && touched.country && styles.redLbl}`} >Country</label>
                            <input className={`${styles.cardInput} ${errors.country && touched.country && styles.redInput}`} name='country' placeholder='Entery a country' onBlur={handleBlur} onChange={handleChange} value={values.country} />
                            {errors.country && touched.country &&
                                (<div className={styles.errorMessage}>{errors.country} </div>)}
                        </div>
                        <div className={styles.cardDetail}>
                            <label className={`${styles.lbl} ${errors.city && touched.city && styles.redLbl}`}>City</label>
                            <input className={`${styles.cardInput} ${errors.city && touched.city && styles.redInput}`} name='city' placeholder='Entery a city' onBlur={handleBlur} onChange={handleChange} value={values.city} />
                            {errors.city && touched.city &&
                                (<div className={styles.errorMessage}>{errors.city} </div>)}
                        </div>
                        <div className={styles.cardDetail}>
                            <label className={`${styles.lbl} ${errors.email && touched.email && styles.redLbl}`}>Email</label>
                            <input className={`${styles.cardInput} ${errors.email && touched.email && styles.redInput}`} name='email' placeholder='Enter a e-mail (abc@xyz.com)' onBlur={handleBlur} onChange={handleChange} value={values.email} />
                            {errors.email && touched.email &&
                                (<div className={styles.errorMessage}>{errors.email} </div>)}
                        </div>

                        <button className={styles.btn} type='submit'>Add</button>

                    </form>
                </div>
            </div >
        </div >
    )
}
export default AddLink;