import React from "react";
import { Button } from "../../UI/Button";
import classes from "../Card/BookCard.module.scss";
import { BookCard } from "../Card/BookCard";
import { useContext } from "react";
import { BooksContext } from "../../store/BooksContext";
import { getBookInfo } from "./getBookInfo";

export function BrowserItems(props) {
  const BooksCtx = useContext(BooksContext);
  const booksListRender = props.apiResult.map((book) => {
    const removeItem = () => {
      BooksCtx.addItem(bookInfo);
      props.onRemove(bookInfo.id);
    };
    const bookInfo = getBookInfo(book);

    return (
      <BookCard
        key={book.id}
        className={classes.container}
        name="api"
        book={book.volumeInfo}
        {...bookInfo}
      >
        <Button onClick={removeItem}>Add to local </Button>
      </BookCard>
    );
  });
  return <div className={classes["api-cont"]}> {booksListRender}</div>;
}
