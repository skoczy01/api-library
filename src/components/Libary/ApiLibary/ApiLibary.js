import React, { useState } from "react";
import Form from "../../UI/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import ApiBrowser from "./ApiBrowser";
export default function ApiLibary(props) {
  //Api state's
  const [apiError, setApiError] = useState("");
  const [booksFromApi, setBooksFromApi] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  //Search by entered value by API
  const onSubmitApiSearchHandler = (event) => {
    event.preventDefault();
    const API_KEY = "AIzaSyBYvbIypkRkXOADFpZ_nBrFN9jkqD3bngw";
    const API_FETCH = `https://books.googleapis.com/books/v1/volumes?q=${searchValue}&download=DOWNLOAD_UNDEFINED&filter=ebooks&langRestrict=pl&libraryRestrict=no-restrict&maxAllowedMaturityRating=MATURE&maxResults=15&orderBy=relevance&printType=BOOKS&projection=FULL&key=${API_KEY}`;

    if (!searchValue) {
      return setApiError("This input cant be empty!");
    } else {
      fetch(API_FETCH)
        .then((res) => res.json())
        .then(
          (result) => {
            setBooksFromApi(result.items);
            setApiError("");
          },
          (error) => {
            return error;
          }
        );
    }
    setSearchValue("");
  };
  //Add item from API to local Libary
  const addBookFromApiToLocalBooks = (
    title,
    author,
    category,
    description,
    date,
    image,
    id,
    link
  ) => {
    props.setBooks((prev) => [
      ...prev,
      {
        id: id,
        link: link,
        image: image,
        title: title,
        author: author,
        publishedDate: date,
        category: category,
        description: description,
      },
    ]);
    //Delete added book from api to local
    setBooksFromApi(booksFromApi.filter((book) => book.id !== id));
  };
  return (
    <div className="google-search">
      <h2>Google Search Books</h2>
      <Form onSubmit={onSubmitApiSearchHandler}>
        <Input
          className="test"
          type="text"
          id="searchbook"
          initialValue={searchValue}
          placeholder="Type a title of search book"
          onInputChange={(event) => {
            setSearchValue(event.target.value);
          }}
        >
          Search data from GoogleBooks
        </Input>
        <Button type="submit">Search</Button>
      </Form>
      {apiError ? <p className="error">{apiError}</p> : null}
      {!booksFromApi ? (
        <p className="notfound">
          Cannot find your entered title, please try again
        </p>
      ) : (
        <ApiBrowser
          apiResult={booksFromApi}
          onAdd={addBookFromApiToLocalBooks}
        />
      )}
    </div>
  );
}
