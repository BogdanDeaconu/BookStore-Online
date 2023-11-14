import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import ListOfBooks from "../components/BookShop/ListOfBooks";
import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../models/CarouselItem";

import BookModel from "../models/Book";

const DUUMY_CAROUSELITEMS: CarouselItem[] = [
  {
    id: 1,
    image: "assets/SVG/svg-1.svg",
    title: "Buy textbooks for the best price",
    text: "From applied literature to educational resources, we have a lot of textbooks to offer you. We sell only the best books.",
  },
  {
    id: 2,
    image: "assets/SVG/svg-2.svg",
    title: "Buy textbooks for the best price",
    text: "From applied literature to educational resources, we have a lot of textbooks to offer you. We sell only the best books.",
  },
  {
    id: 3,
    image: "assets/SVG/svg-3.svg",
    title: "Buy textbooks for the best price",
    text: "From applied literature to educational resources, we have a lot of textbooks to offer you. We sell only the best books.",
  },
];

const HomePage = () => {
  const data = useLoaderData() as { books: BookModel[] };

  return (
    <>
      <Carousel carouselData={DUUMY_CAROUSELITEMS} />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data.books}>
          {(books) => {
            const bestOfMonthBooks = Array.isArray(books)
              ? books.filter((book) => !book.newRelease)
              : [];
            const newReleaseBooks = Array.isArray(books)
              ? books.filter((book) => book.newRelease)
              : [];

            return (
              <>
                <ListOfBooks
                  books={bestOfMonthBooks}
                  category="Best of month"
                />
                <ListOfBooks books={newReleaseBooks} category="New releases" />
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

async function loadBooks() {
  try {
    const response = await fetch("https://localhost:7276/GetAll");

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // If there's an error, reject the promise with the error message.
    throw new Error(error.message);
  }
}
export function loader() {
  return defer({
    books: loadBooks(),
  });
}
