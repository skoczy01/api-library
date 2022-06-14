import React, { useState } from "react";
import { Form } from "../../UI/Form";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { BrowserItems } from "./BrowserItems";
export function BrowserLibrary(props) {
  const [apiError, setApiError] = useState("");
  const [booksFromApi, setBooksFromApi] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onSubmitApiSearchHandler = (event) => {
    event.preventDefault();

    const API_FETCH = `https://books.googleapis.com/books/v1/volumes?q=${searchValue}&download=DOWNLOAD_UNDEFINED&filter=ebooks&langRestrict=pl&libraryRestrict=no-restrict&maxAllowedMaturityRating=MATURE&maxResults=15&orderBy=relevance&printType=BOOKS&projection=FULL&key=${process.env.REACT_APP_API_KEY}`;

    if (!searchValue) {
      return setApiError("This input cant be empty!");
    } else {
      fetch(API_FETCH)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((result) => {
          setBooksFromApi(result.items);
          setApiError("");
          if (!result.totalItems) {
            setApiError("Error");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    setSearchValue("");
  };
  const removeAddedBook = (id) => {
    setBooksFromApi(booksFromApi.filter((book) => book.id !== id));
  };
  return (
    <div className={props.className}>
      <h2>Search GoogleBooks</h2>
      <Form onSubmit={onSubmitApiSearchHandler}>
        <Input
          type="text"
          id="searchbook"
          initialValue={searchValue}
          placeholder="Type a title of search book"
          onInputChange={(event) => {
            setSearchValue(event.target.value);
          }}
        >
          Enter a title
        </Input>
        <Button type="submit">Search</Button>
      </Form>
      {apiError ? <p>{apiError}</p> : null}
      {!booksFromApi ? (
        <p>Cannot find your entered title, please try again</p>
      ) : (
        <BrowserItems apiResult={booksFromApi} onRemove={removeAddedBook} />
      )}
    </div>
  );
}
