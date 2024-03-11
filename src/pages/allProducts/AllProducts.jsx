import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import useFetch from "../../hooks/useFetch";
import styles from "./AllProduct.module.css";

function AllProducts() {
  const catId = useParams().id;

  const { data } = useFetch(
    `/products?populate=*&filters[category][$eq]=${catId}`
  );
  console.log(catId);
  console.log(data);

  return (
    <div className={styles.products}>
      <h2>
        choose best of <span>{catId}</span> Products
      </h2>
      <div className={styles.items}>
        <List catId={catId} />
      </div>
    </div>
  );
}

export default AllProducts;
