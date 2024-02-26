import styles from "./users.module.css";
import Search from "../search/search";

const Users = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
      </div>
      <div className={styles.table}></div>
    </div>
  );
};

export default Users;
