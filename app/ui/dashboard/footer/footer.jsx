import styles from './footer.module.css'

const Footer = () =>{

    return(

        <div className={styles.container}>
            <div className={styles.footerLogo}>
                @PeterJagusch 
            </div>
            <div className={styles.year}>
                &copy; 2024
            </div>            
        </div>

    )

}

export default Footer