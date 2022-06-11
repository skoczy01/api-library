import React from "react";
import { BookCard } from "../../Card/BookCard";
import classes from "./LocalLibaryItems.module.scss";
export function LocalLibraryItems(props) {
  const booksListRender = props.books.map((book) => (
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
      deleteHandler={props.deleteHandler}
      name="local"
    />
  ));
  return <div className={classes["card-container"]}> {booksListRender}</div>;
}
