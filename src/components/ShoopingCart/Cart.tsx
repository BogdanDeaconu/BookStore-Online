import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItemList from "./CartItemList";

const Cart: React.FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const isLoggedIn = useSelector((state: any) => state.userStatus.isLoggedIn);

  return (
    <div className="cart">
      {cart.totalQuantity > 0 ? (
        <>
          <div className={styles.title}>Your Products</div>
          <CartItemList cartlist={cart.items} />
        </>
      ) : (
        <div className={styles.empty_cart}>
          <p> Cart is empty</p>
        </div>
      )}
      <div className={styles.total}>
        <span>Total :</span>
        <p>${cart.totalAmount}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/`}>
          <button className={styles.back_button}>Continue Shopping</button>
        </Link>
        {isLoggedIn === "true" ? (
          <Link to={`/checkout`}>
            <button className={styles.checkout_button}>Place Order</button>
          </Link>
        ) : (
          <Link to={`/login`}> 
            <button className={styles.checkout_button}>Place Order</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
