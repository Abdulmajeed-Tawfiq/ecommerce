import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="/images/category/pexels-photo-322207.jpeg"
            alt="Accessories"
          />

          <Link className={styles.link} to="/products/jewelery">
            Jewelery
          </Link>
        </div>
        <div className={styles.row}>
          <img
            src="/images/category/women.jpeg"
            alt="Women"
          />

          <Link to="/products/women's clothing" className={styles.link}>
            Women
          </Link>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="/images/category/all.jpeg"
            alt="All Product"
          />

          <Link to="/products/all" className={styles.link}>
            All Product
          </Link>
        </div>
      </div>
      <div className={`${styles.col} ${styles.colOne}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
            src="/images/category/men.jpeg"
            alt="Men"
              />

              <Link to="/products/men's clothing" className={styles.link}>
                Men
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="/images/category/electronics.jpg"
            alt="teenager"
          />

          <Link to="/products/electronics" className={styles.link}>
            Electronics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
