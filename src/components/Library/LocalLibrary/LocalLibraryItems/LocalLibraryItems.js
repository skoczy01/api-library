import React from "react";
import { BookCard } from "../../Card/BookCard";
import classes from "./LocalLibaryItems.module.scss";
export function LocalLibraryItems(props) {
  const booksListRender = props.filteredItem.map((bookData) => {
    return (
      <BookCard
        key={bookData.id}
        id={bookData.id}
        className={classes.container}
        {...bookData}
        name="local"
      />
    );
  });
  return <div className={classes["card-container"]}> {booksListRender}</div>;
}
