import styles from './transactions.module.css'
import Image from 'next/image'
const TransActions = () => {
    return(
        <div className={styles.container}>
              <h2 className={styles.title}>Latest TransActions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Name here
                            </div>
                        </td>
                        <td>                            
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>2024 02 05</td>
                        <td>£120</td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    )
}

export default TransActions