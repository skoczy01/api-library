import React from "react";
import Button from "../../UI/Button";
import classes from "./ApiBooks.module.scss";
export default function ApiBooks(props) {
  const notFound = <span className={classes.notfound}>Not entered</span>;
  const booksListRender = props.apiResult.map((book) => (
    <ul key={book.id} className={classes.list}>
      <a href={book.volumeInfo.canonicalVolumeLink}>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="img"
          width="50px"
          height="70px"
        />
      </a>
      <li>
        Book title :{" "}
        <span>{book.volumeInfo.title ? book.volumeInfo.title : notFound}</span>
      </li>
      <li>
        Book author :
        <span>
          {book.volumeInfo.authors ? book.volumeInfo.authors : notFound}
        </span>
      </li>
      <li>
        Categories:
        <span>
          {book.volumeInfo.categories ? book.volumeInfo.categories : notFound}
        </span>
      </li>
      <div>
        Book description:
        {book.volumeInfo.description ? (
          <p className={classes.description}>{book.volumeInfo.description}</p>
        ) : (
          notFound
        )}
      </div>
      <li>
        Book published Date :{" "}
        <span>
          {book.volumeInfo.publishedDate
            ? book.volumeInfo.publishedDate
            : notFound}
        </span>
      </li>
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
    </ul>
  ));
  return <div className={classes.apicontener}> {booksListRender}</div>;
}
