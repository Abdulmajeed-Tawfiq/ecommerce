/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ item }) {
  console.log(item);
  return (
    <Link className={styles.link} to={`/product/${item.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.attributes.isNew && <span>New Season</span>}
          <img
            src={item.attributes?.img?.data?.attributes?.url}
            alt=""
            className={styles.mainImg}
          />
        </div>
        <div className={styles.text}>
          <h3>{item.attributes.title}</h3>
          <h2>${item.attributes.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
