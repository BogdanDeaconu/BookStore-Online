import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../context/cart-slice";

import CartElementModel from "../../models/CartElement";

const CartItem: React.FC<CartElementModel> = (props) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.deleteItemFromCart(props.id));
  };

  return (
    <li className={styles.cartitem}>
      <img src={props.image} alt={props.title} />
      <div className={styles.content}>
        <div className={styles.title_author}>
          <h3 className={styles.title}>{props.title}</h3>
          <div className={styles.author}>
            <span>by</span>
            <p>{props.author}</p>
          </div>
        </div>
        <div className={styles.price_action}>
          <div className={styles.price}>${props.totalPrice}</div>
          <div className={styles.actions}>
            <button className={styles.button}></button>

            <button className={styles.button} onClick={removeHandler}>
              <img src="public/assets/Icons/icons8-trash.svg"></img>Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
