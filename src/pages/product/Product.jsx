import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import styles from "./Product.module.css";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";

function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { data, error } = useFetch(`/products/${id}?populate=*`);
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
      ) : data.attributes.img ? (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img
                src={data?.attributes?.img?.data?.attributes?.url}
                alt="image 1"
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={data?.attributes?.img2?.data?.attributes?.url}
                alt="image 2"
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className={styles.mainImg}>
              <img
                src={data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1>{data?.attributes?.title}</h1>
            <span className={styles.price}>{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className={styles.quantity}>
              <button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
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
            <div className={styles.links}>
              <div className={styles.item}>
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className={styles.item}>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className={styles.info}>
              <span>Vendor: Polo</span>
              <span>
                Product Type:
                {data?.attributes?.sub_categories?.data[0].attributes.title}
              </span>
              <span>
                Tag:
                {
                  data?.attributes?.sub_categories?.data[0].attributes.title
                }, {data?.attributes?.type}
              </span>
            </div>
            <hr />
            <div className={styles.info}></div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Product;
