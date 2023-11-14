import BookList from "./BookList";
import styles from "./ListOfBooks.module.scss";
import Book from "../../models/Book";

const ListOfBooks: React.FC<{ category: string; books: Book[] }> = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.category}</h2>
      <div className={styles.list}>
        <BookList Books={props.books} />
      </div>
    </div>
  );
};

export default ListOfBooks;
