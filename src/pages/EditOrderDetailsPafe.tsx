import CheckoutForm from "../components/Checkout/CheckoutForm";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const EditOrderDetailsPage = () => {
  const orders = useSelector((state: any) => state.orders.orders);
  const { id } = useParams<{ id: string }>();

  const order = orders.find((order) => order.id === +id);

  return <CheckoutForm id={ parseInt(id) } checkoutInformation={order.checkoutInformation}  />;
};

export default EditOrderDetailsPage;
