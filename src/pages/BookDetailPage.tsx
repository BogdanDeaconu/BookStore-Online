import { useParams } from "react-router-dom";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import BookDetailC from "../components/BookDetail";
import BookModel from "../models/Book";

const BookDetailPage = () => {
  const data = useLoaderData() as { books: BookModel[] };
  const { id } = useParams<{ id: string }>();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.books}>
        {(books) => {
          const bookitem = Array.isArray(books)
            ? books.filter((book) => book.id === parseInt(id))
            : [];
          return (
            <>
              <BookDetailC book={bookitem[0]} />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default BookDetailPage;
