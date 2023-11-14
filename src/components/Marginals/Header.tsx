import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userStatusActions } from "../../context/use-status-slice";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
  const userStatus = useSelector((state: any) => state.userStatus);

  const logOutHandler = () => {
    confirm("Are you sure you want to log out?");
    dispatch(userStatusActions.logout());
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="public\assets\Logo Symbol\Logo ITP - Web - Symbol - Black.svg" />
        ITP Library
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              <img src="public/assets/Icons/icons8-home.svg"></img>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <img src="public/assets/Icons/icons8-shopping-cart.svg"></img>
              {cartQuantity > 0 ? (
                <span className={styles.cartItemsAmount}>
                  {cartQuantity} Items
                </span>
              ) : (
                <>Shooping Cart</>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <img src="public/assets/Icons/icons8-in-transit.svg"></img>
              Orders
            </NavLink>
          </li>
          <li>
            <img src="public/assets/Icons/icons8-user.svg"></img>
            {userStatus.isLoggedIn === "true" ? (
              <button onClick={logOutHandler}>{userStatus.userName}</button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
