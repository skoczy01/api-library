import React, { useState } from "react";
import { Form } from "../../UI/Form";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { BrowserItems } from "./BrowserItems";
import classes from "./LoadingIcon.module.scss";
export function BrowserLibrary(props) {
  const [emptyMessage, setEmptyMessage] = useState("");
  const [booksFromApi, setBooksFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  async function onSubmitApiSearchHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const API_FETCH = `https://books.googleapis.com/books/v1/volumes?q=${searchValue}&download=DOWNLOAD_UNDEFINED&filter=ebooks&langRestrict=pl&libraryRestrict=no-restrict&maxAllowedMaturityRating=MATURE&maxResults=15&orderBy=relevance&printType=BOOKS&projection=FULL&key=${process.env.REACT_APP_API_KEY}`;

      if (!searchValue) {
        setIsLoading(false);
        setEmptyMessage("This input cant be empty!");
        return;
      } else {
        const response = await fetch(API_FETCH);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        if (data.totalItems === 0) {
          setIsLoading(false);
          setSearchValue("");

          return setError("Not found");
        }
        setBooksFromApi(data.items);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
    setSearchValue("");
    setEmptyMessage("");
  }
  const removeAddedBook = (id) => {
    setBooksFromApi(booksFromApi.filter((book) => book.id !== id));
  };

  let content = null;
  if (booksFromApi.length > 0) {
    content = (
      <BrowserItems apiResult={booksFromApi} onRemove={removeAddedBook} />
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <div className={classes.loader}></div>;
  }
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
      {emptyMessage ? <p>{emptyMessage}</p> : null}
      {content}
    </div>
  );
}
