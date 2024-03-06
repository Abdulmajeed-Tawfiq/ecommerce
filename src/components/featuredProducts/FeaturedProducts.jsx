import Card from "../card/Card";
import styles from "./FeaturedProducts.module.css";
import useFetch from "../../hooks/useFetch";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Welcome to our <strong>{type} Products</strong> section, where we
          curate a selection of the best-sellers and new arrivals that you
          absolutely won't want to miss. Each product in this collection has
          been carefully chosen to ensure you get the best of what's available.
          From the latest trends to the most sought-after items, our Featured
          Products are designed to cater to your unique style and preferences.
          Don't miss out on these exclusive picks!
        </p>
      </div>
      <div className={styles.bottom}>
        {error
          ? "someThing went wrong"
          : loading
          ? "loading..."
          : data.map((item) => <Card item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
