import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import styles from "./Product.module.css";

function Product() {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { data, error } = useFetch(`/products/${id}`);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className={styles.product}>
      {error ? (
        "someThing went wrong"
      ) : loading ? (
        Array.from({ length: 2 }).map((_, index) => (
          <SkeletonCard key={index} />
        )) // Display skeleton cards while loading
      ) : (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img
                src={data?.image}
                alt="image 1"
                // onClick={() => setSelectedImg("img")}
              />
            </div>
          </div>

          <div className={styles.right}>
            <h1>{data?.title}</h1>
            <div className={styles.info}>
              <span>
                Product Type:
                {data?.description}
              </span>
              {/* <span>
                Tag:
                {
                  data?.attributes?.sub_categories?.data[0].attributes.title
                }, {data?.attributes?.type}
              </span> */}
            </div>
            <p className={styles.price}>
              price: <span>{data?.price} $</span>
            </p>
            <p>{data?.desc}</p>
            <div className={styles.quantity}>
              <button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
              <div className={styles.addtoCart}>
                <button
                  className={styles.add}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity,
                      })
                    )
                  }
                >
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
              </div>
            </div>

            {/* <div className={styles.links}>
              <div className={styles.item}>
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className={styles.item}>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
