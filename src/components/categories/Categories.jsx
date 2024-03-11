import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Accessories"
          />

          <Link className={styles.link} to="/products/Accessories">
            Accessories
          </Link>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/733850/pexels-photo-733850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women"
          />

          <Link to="/products/women" className={styles.link}>
            Women
          </Link>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="New Season"
          />

          <Link to="/products/new" className={styles.link}>
            New Season
          </Link>
        </div>
      </div>
      <div className={`${styles.col} ${styles.colOne}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/15954841/pexels-photo-15954841/free-photo-of-group-of-men-sitting-on-the-grass-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Men"
              />

              <Link to="/products/men" className={styles.link}>
                Men
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/9558770/pexels-photo-9558770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="teenager"
          />

          <Link to="/products/teenager" className={styles.link}>
            teenager
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
