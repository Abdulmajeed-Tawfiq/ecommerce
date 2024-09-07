import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import SkeletonCard from "../skeletonCard/SkeletonCard";
import styles from "./List.module.css";

// eslint-disable-next-line react/prop-types
function List({ catId }) {
  let link = `/products/category/${catId}`;
  if (catId === 'all') {
    link = '/products/'
  }

  const { data, loading } = useFetch(`${link}`);
  // const { data, loading } = useFetch(
  //   catId === "new"
  //     ? `/products?populate=*&filters[isNew][$eq]=true`
  //     : `/products?populate=*&filters[category][$eq]=${catId}`
  // );
  console.log(data);
  const productData = data;

  return (
    <div className={styles.list}>
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        )) // Display skeleton cards while loading
      ) : productData?.length === 0 ? (
        <div className={styles.noItems}>
          <p>oops... there is no product on this category</p>
          <Link to="/">bakc to home</Link>
        </div>
      ) : (
        productData?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
}

export default List;
