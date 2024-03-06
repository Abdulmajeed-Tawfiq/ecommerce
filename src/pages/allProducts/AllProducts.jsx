import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./AllProduct.module.css";

function AllProducts() {
  const catId = parseInt(useParams().id || "0");
  // const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");

  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data } = useFetch(`sub-categories`);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);

    const isChecked = e.target.checked;
    console.log(isChecked);

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Products Categories</h2>
          {data?.map((item) => (
            <div className={styles.inputItem} key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        {/* <div className={styles.filterItem}>
          <h2>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
            <span>{maxPrice}</span>
          </div>
        </div> */}
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
              defaultChecked
            />
            <label htmlFor="asc">price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">price (Highst first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <List
          catId={catId}
          // maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
}

export default AllProducts;
