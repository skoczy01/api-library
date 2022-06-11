import React, { useState } from "react";
import LocalLibaryItems from "./LocalLibaryItems/LocalLibaryItems";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Form from "../../UI/Form";
import classes from "./LocalLibary.module.scss";
export default function LocalLibary(props) {
  const [titleName, setTitleName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  // Filter state
  const [filterName, setFilterName] = useState("");
  //error state for 1st section
  const [errorValue, setErrorValue] = useState(null);
  //Cleaning function after submit

  const clearAllInputValues = () => {
    setTitleName("");
    setAuthorName("");
    setPublishedDate("");
    setCategoryValue("");
    setDescriptionValue("");
    setErrorValue("");
  };
  //Update array after submit
  const onSubmitFormHandler = () => {
    props.setBooks((prev) => [
      ...prev,
      {
        id: props.books.length,
        image: "",
        title: titleName,
        author: authorName,
        category: categoryValue,
        description: descriptionValue,
        publishedDate: publishedDate,
      },
    ]);
    return clearAllInputValues();
  };
  //Validate form and add new item
  const onValidateFormHandler = (event) => {
    event.preventDefault();
    if (
      !titleName ||
      !authorName ||
      !publishedDate ||
      !categoryValue ||
      !descriptionValue
    ) {
      return setErrorValue("The form field cannot be empty!");
    } else {
      onSubmitFormHandler();
    }
  };
  //Delete item function
  const deleteHandler = (id) => {
    props.setBooks(props.books.filter((book) => book.id !== id));
  };
  //Filter items function
  const filtersItems = props.books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(filterName);
  });
  return (
    <div className={props.className}>
      <h2>Local Books</h2>
      <Form onSubmit={onValidateFormHandler}>
        <Input
          type="text"
          id="title"
          onInputChange={(event) => {
            setTitleName(event.target.value);
          }}
          initialValue={titleName}
        >
          Title
        </Input>
        <Input
          type="text"
          id="author"
          onInputChange={(event) => {
            setAuthorName(event.target.value);
          }}
          initialValue={authorName}
        >
          Author
        </Input>

        <Input
          type="text"
          id="category"
          onInputChange={(event) => setCategoryValue(event.target.value)}
          initialValue={categoryValue}
        >
          Category
        </Input>
        <Input
          type="text"
          id="description"
          onInputChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
          initialValue={descriptionValue}
        >
          Description
        </Input>
        <Input
          type="date"
          id="publishedDate"
          onInputChange={(event) => {
            setPublishedDate(event.target.value);
          }}
          initialValue={publishedDate}
        >
          Published date
        </Input>
        <Button type="submit" className={classes["form-btn"]}>
          Add Book
        </Button>
        <Input
          type="text"
          id="filter"
          onInputChange={(event) =>
            setFilterName(event.target.value.toLowerCase())
          }
          placeholder={
            props.books.length ? "Search by title" : "Libary is empty"
          }
          disabled={props.books.length ? false : true}
        >
          Filter Book
        </Input>
      </Form>

      {props.books.length ? (
        <LocalLibaryItems books={filtersItems} deleteHandler={deleteHandler} />
      ) : (
        <p>Not found any book, maby add some?</p>
      )}
    </div>
  );
}
