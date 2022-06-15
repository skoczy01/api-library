import React, { useState, useContext } from "react";
import { LocalLibraryItems } from "./LocalLibraryItems/LocalLibraryItems";
import { Input } from "../../UI/Input";
import { LocalLibraryForm } from "./LocalLibraryForm";
import { BooksContext } from "../../store/BooksContext";
import { Form } from "../../UI/Form";
export function LocalLibrary(props) {
  const [filterName, setFilterName] = useState("");
  const bookCtx = useContext(BooksContext);
  const books = bookCtx.books;

  const filtersItems = books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(filterName);
  });
  return (
    <div className={props.className}>
      <h2>Local Books</h2>
      <LocalLibraryForm />
      <Form subtitleForm="Filter by name">
        <Input
          type="text"
          id="filter"
          onInputChange={(event) => {
            setFilterName(event.target.value.toLowerCase().trim());
          }}
          placeholder={books.length ? "Search by title" : "Library is empty"}
          disabled={books.length === 0}
        >
          Filter Book
        </Input>
      </Form>

      {books.length ? (
        <LocalLibraryItems filteredItem={filtersItems} />
      ) : (
        <p>Not found any book, maby add some?</p>
      )}
    </div>
  );
}
