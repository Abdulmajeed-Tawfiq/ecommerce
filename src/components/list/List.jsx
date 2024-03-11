import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import SkeletonCard from "../skeletonCard/SkeletonCard";
import styles from "./List.module.css";

// eslint-disable-next-line react/prop-types
function List({ catId }) {
  const { data, loading } = useFetch(
    catId === "new"
      ? `/products?populate=*&filters[isNew][$eq]=true`
      : `/products?populate=*&filters[category][$eq]=${catId}`
  );

  return (
    <div className={styles.list}>
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        )) // Display skeleton cards while loading
      ) : data.length === 0 ? (
        <div className={styles.noItems}>
          <p>oops... there is no product on this categry</p>
          <Link to="/">bakc to home</Link>
        </div>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
}

export default List;
