import React, { useContext } from "react";
import { BooksContext } from "../../../store/BooksContext";
import { BookCard } from "../../Card/BookCard";
import classes from "./LocalLibaryItems.module.scss";
export function LocalLibraryItems(props) {
  const booksCtx = useContext(BooksContext);
  const books = booksCtx.books;
  const booksListRender = books.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      className={classes.container}
      title={book.title}
      author={book.author}
      category={book.category}
      link={book.link}
      image={book.image}
      description={book.description}
      publishedDate={book.publishedDate}
      name="local"
    />
  ));
  return <div className={classes["card-container"]}> {booksListRender}</div>;
}
