import Book from "../../models/Book";
import BookItem from "./BookItem";
import React from "react";

import styles from "./BookList.module.scss";

const BookList: React.FC<{ Books: Book[] }> = (props) => {
  return (
    <ul className={styles.books}>
      {props.Books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </ul>
  );
};

export default BookList;
