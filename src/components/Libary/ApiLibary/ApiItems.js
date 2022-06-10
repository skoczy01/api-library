import React from "react";
import Button from "../../UI/Button";
import classes from "../Card/BookCard.module.scss";
import BookCard from "../Card/BookCard";
export default function ApiBooks(props) {
  const notFound = <span className={classes.notfound}>Not entered</span>;
  const booksListRender = props.apiResult.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      className={classes.container}
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
      category={book.volumeInfo.categories ? book.volumeInfo.categories[0] : ""}
      link={book.volumeInfo.canonicalVolumeLink}
      image={book.volumeInfo.imageLinks.thumbnail}
      description={
        book.volumeInfo.description ? book.volumeInfo.description : ""
      }
      publishedDate={book.volumeInfo.publishedDate}
      name="api"
    >
      <Button
        onClick={() => {
          const title = book.volumeInfo.title ? book.volumeInfo.title : "";
          const author = book.volumeInfo.authors
            ? book.volumeInfo.authors[0]
            : "";
          const category = book.volumeInfo.categories
            ? book.volumeInfo.categories[0]
            : "";
          const description = book.volumeInfo.description
            ? book.volumeInfo.description
            : "";
          const date = book.volumeInfo.publishedDate;
          const image = book.volumeInfo.imageLinks.thumbnail;
          const link = book.volumeInfo.canonicalVolumeLink;
          const id = book.id;
          props.onAdd(
            title,
            author,
            category,
            description,
            date,
            image,
            id,
            link
          );
        }}
      >
        Add to local libary
      </Button>
    </BookCard>
  ));
  return <div className={classes["api-cont"]}> {booksListRender}</div>;
}
