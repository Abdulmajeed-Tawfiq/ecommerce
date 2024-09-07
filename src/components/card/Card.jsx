/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ item }) {
  return (
    <Link className={styles.link} to={`/product/${item.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {/* {item.attributes.isNew && <span>New Season</span>} */}
          <img src={item?.image} alt="" className={styles.mainImg} />
        </div>
        <div className={styles.text}>
          <h3>{item.title}</h3>
          <h2>${item.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
