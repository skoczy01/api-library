import React, { useState, useContext } from "react";
import { LocalLibraryItems } from "./LocalLibraryItems/LocalLibraryItems";
import { Input } from "../../UI/Input";
import { LocalLibraryForm } from "./LocalLibraryForm";
import { BooksContext } from "../../store/BooksContext";

export function LocalLibrary(props) {
  const [filterName, setFilterName] = useState("");
  // const [errorValue, setErrorValue] = useState(null);
  const bookCtx = useContext(BooksContext);
  console.log(bookCtx.books);

  const deleteHandler = (id) => {
    props.setBooks(props.books.filter((book) => book.id !== id));
  };
  const filtersItems = props.books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(filterName);
  });
  return (
    <div className={props.className}>
      <h2>Local Books</h2>
      <LocalLibraryForm books={props.books} setBooks={props.setBooks} />
      <Input
        type="text"
        id="filter"
        onInputChange={(event) =>
          setFilterName(event.target.value.toLowerCase())
        }
        placeholder={
          props.books.length ? "Search by title" : "Library is empty"
        }
        disabled={props.books.length ? false : true}
      >
        Filter Book
      </Input>
      {/* {errorValue ? errorValue : null} */}
      {props.books.length ? (
        <LocalLibraryItems books={filtersItems} deleteHandler={deleteHandler} />
      ) : (
        <p>Not found any book, maby add some?</p>
      )}
    </div>
  );
}
