import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./cart.module.css";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Ony4jDymoEzlBK9ElgaE4tOYan2QshzZSWIml4abZzgXyxVxeiuVMmXKRWzv5JfblFeOfMYbA5igTqlzKrM2Yci00xuYfZyqC"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe object is null");
      }
      const response = await makeRequest.post("/orders", { products });
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className={styles.item} key={item.id}>
          <img
            src={import.meta.env.VITE_UPLOAD_URL + item.img}
            alt={item.title}
          />
          <div className={styles.details}>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className={styles.price}>
              {item.quantity} x {item.price}
            </div>
            <hr />
          </div>
          <DeleteOutlinedIcon
            className={styles.delete}
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <div className={styles.reset} onClick={() => dispatch(resetCart())}>
          Reset Cart
        </div>
      </div>
    </div>
  );
}

export default Cart;
