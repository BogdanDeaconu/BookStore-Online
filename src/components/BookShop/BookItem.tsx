import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./BookItem.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Card from "../UI/Card";
import React from "react";

import { cartActions } from "../../context/cart-slice";

interface BookItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  author: string;
}

const BookItem: React.FC<BookItemProps> = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image,
      })
    );
  };

  return (
    <li className={styles.bookitem}>
      <Card>
        <Link to={`/book/${props.id}`}>
          <img src={props.image} alt={props.title} />
        </Link>
        <div className={styles.titleprice}>
          <h3 className={styles.title}>
            <span>{props.title.slice(0, 15)}</span>
            {props.title.length > 10 && "..."}
          </h3>
          <div className={styles.price}>${props.price}</div>
        </div>
        <div className={styles.author}>{props.author} </div>
        <div className={styles.actions}>
          <button className={styles.button} onClick={addToCartHandler}>
            <AiOutlineShoppingCart />
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default BookItem;
