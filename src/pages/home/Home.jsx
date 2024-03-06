import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import styles from "./Home.module.css";
import Categories from "../../components/categories/Categories";

function Home() {
  return (
    <div className={styles.home}>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
}

export default Home;
