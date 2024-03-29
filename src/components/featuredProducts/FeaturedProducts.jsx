import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";
import SkeletonCard from "../skeletonCard/SkeletonCard";
import styles from "./FeaturedProducts.module.css";

// eslint-disable-next-line react/prop-types
function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  const featuredData = data.filter((item) => item.attributes.class === type);

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Welcome to our <strong>{type} Products</strong> section, where we
          curate a selection of the best-sellers and new arrivals that you
          absolutely won&rsquo;t want to miss. Each product in this collection
          has been carefully chosen to ensure you get the best of what&rsquo;s
          available. From the latest trends to the most sought-after items, our
          Featured Products are designed to cater to your unique style and
          preferences. Don&rsquo;t miss out on these exclusive picks!
        </p>
      </div>
      <div className={styles.bottom}>
        {error
          ? "someThing went wrong"
          : loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            )) // Display skeleton cards while loading
          : featuredData.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
