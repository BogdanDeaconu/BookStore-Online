import CartItem from "./CartItem";
import CartElementModel from "../../models/CartElement";

const CartItemList: React.FC<{ cartlist: CartElementModel[] }> = (props) => {
  return (
    <ul>
      {props.cartlist.map((cartitem) => (
        <CartItem
          key={cartitem.id}
          id={cartitem.id}
          image={cartitem.image}
          title={cartitem.title}
          author={cartitem.author}
          totalPrice={cartitem.totalPrice}
          price={cartitem.price}
        />
      ))}
    </ul>
  );
};

export default CartItemList;
