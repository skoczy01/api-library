import React from "react";
import BookCard from "../BookCard";
import classes from "./LocalLibaryItems.module.scss";
export default function LocalLibaryItems(props) {
  const notFound = <span className={classes.notfound}>Not entered</span>;
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
    />
  ));
  return <div className="container"> {booksListRender}</div>;
}
