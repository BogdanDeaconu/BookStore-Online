import styles from "./Order.module.scss";
import { Link } from "react-router-dom";
import OrderModel from "../../models/Order";

const Order: React.FC<OrderModel> = (props) => {
  return (
    <li className={styles.orderitem}>
      <img src={"public/assets/Icons/icons8-book.svg"} alt={props.title} />
      <div className={styles.content}>
        <div className={styles.order_information}>
          <h3 className={styles.title}>Order {props.title}</h3>
          <div className={styles.quantity}>
            <span>Items:</span>
            <p>{props.quantity}</p>
          </div>
          <div className={styles.status}>
            <span>Delivery Status:</span>
            <p>{props.status}</p>
          </div>
        </div>

        <div className={styles.price_action}>
          <div className={styles.price}>${props.price}</div>
          {props.status === "Completed" ? null : (
            <Link to={`/orders/${props.id}`}>
              <div className={styles.actions}>
                <img src="public/assets/Icons/icons8-edit.svg"></img>
                <p>Edit Order Details</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default Order;
