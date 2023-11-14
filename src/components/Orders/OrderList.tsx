import styles from "./OrderList.module.scss";
import Order from "./Order";
import { useSelector } from "react-redux";

const OrderList: React.FC = () => {
  const orders = useSelector((state: any) => state.orders.orders);
  return (
    <div className={styles.orderlist}>
      <div className={styles.title}>Your Products</div>
      <div className={styles.orders}>
        {orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            items={order.items}
            status={order.status}
            title={order.title}
            price={order.price}
            checkoutInformation={order.checkoutInformation}
            quantity={order.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
