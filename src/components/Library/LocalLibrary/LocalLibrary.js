import React, { useState, useContext } from "react";
import { LocalLibraryItems } from "./LocalLibraryItems/LocalLibraryItems";
import { Input } from "../../UI/Input";
import { LocalLibraryForm } from "./LocalLibraryForm";
import { BooksContext } from "../../store/BooksContext";

export function LocalLibrary(props) {
  const [filterName, setFilterName] = useState("");
  // const [errorValue, setErrorValue] = useState(null);
  const bookCtx = useContext(BooksContext);
  const books = bookCtx.books;

  // const deleteHandler = (id) => {
  //   bookCtx.removeItem(id);
  // };

  // const filtersItems = props.books.filter((book) => {
  //   const title = book.title.toLowerCase();
  //   return title.includes(filterName);
  // });
  return (
    <div className={props.className}>
      <h2>Local Books</h2>
      <LocalLibraryForm />
      <Input
        type="text"
        id="filter"
        onInputChange={(event) =>
          setFilterName(event.target.value.toLowerCase())
        }
        placeholder={books.length ? "Search by title" : "Library is empty"}
        disabled={books.length ? false : true}
      >
        Filter Book
      </Input>
      {/* {errorValue ? errorValue : null} */}
      {books.length ? (
        <LocalLibraryItems />
      ) : (
        <p>Not found any book, maby add some?</p>
      )}
    </div>
  );
}
