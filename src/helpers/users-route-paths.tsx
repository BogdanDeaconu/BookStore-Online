import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";

const UsersRoutePaths = () => {
  const isLoggedIn = useSelector((state: any) => state.userStatus.isLoggedIn);

  if (isLoggedIn === 'true') {
    return <OrdersPage />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default UsersRoutePaths;
