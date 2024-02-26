import styles from "./products.module.css";
import Search from "../search/search";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search..." />
      </div>
      <div className={styles.table}></div>
    </div>
  );
};

export default Products;
