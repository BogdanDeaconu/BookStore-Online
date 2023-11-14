import BookModel from "../models/Book";
import styles from "./BookDetail.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../context/cart-slice";

import { AiOutlineShoppingCart } from "react-icons/ai";
 

const BookDetailC: React.FC<{ book: BookModel }> = (props) => {
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.book.id,
        title: props.book.title,
        author: props.book.author,
        price: props.book.price,
        image: props.book.image,
      })
    );
  }

  return (
    <div className={styles.bookdetail}>
      <img src={props.book.image} />
      <div className={styles.bookdetail__info}>
        <div className={styles.bookdetail__info__titleprice}>
          <h1>{props.book.title}</h1>
          <p>${props.book.price}</p>
        </div>

        <div className={styles.bookdetail__info__author}>
          <span>by</span>
          <p>{props.book.author}</p>
        </div>
        <p>{props.book.description}</p>

        <button onClick={handleAddtoCart}>
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetailC;
