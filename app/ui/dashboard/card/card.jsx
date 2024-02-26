import styles from './card.module.css'
import {MdSupervisedUserCircle }  from 'react-icons/md'

const Card = () => {
    return(
        <div className={styles.container}>
        
            <MdSupervisedUserCircle size={24} />
            <div className={styles.text}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>1</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>100%</span> More than last week</span>
            </div>
        </div>
    )
}

export default Card