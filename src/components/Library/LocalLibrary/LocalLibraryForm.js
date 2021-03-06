import React, { useState, useContext } from "react";
import { Form } from "../../UI/Form";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import classes from "./LocalLibrary.module.scss";
import { BooksContext } from "../../store/BooksContext";
export function LocalLibraryForm() {
  const [titleName, setTitleName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const booksCtx = useContext(BooksContext);

  const clearAllInputValues = () => {
    setTitleName("");
    setAuthorName("");
    setPublishedDate("");
    setCategoryValue("");
    setDescriptionValue("");
  };
  const onSubmitFormHandler = () => {
    booksCtx.addItem({
      id: booksCtx.books.length,
      title: titleName,
      author: authorName,
      category: categoryValue,
      description: descriptionValue,
      publishedDate: publishedDate,
      image: "",
      link: "",
    });
    return clearAllInputValues();
  };
  const onValidateFormHandler = (event) => {
    event.preventDefault();
    if (
      !titleName.trim() ||
      !authorName.trim() ||
      !publishedDate ||
      !categoryValue.trim() ||
      !descriptionValue.trim()
    ) {
      clearAllInputValues();
      return alert("The form field cannot be empty!");
    } else {
      onSubmitFormHandler();
    }
  };

  return (
    <Form
      onSubmit={onValidateFormHandler}
      titleForm="Welcome"
      subtitleForm="Let's add your book!"
    >
      <Input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
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
        placeholder="Author"
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
        max="2022-06-30"
      >
        date
      </Input>
      <Button type="submit" className={classes["form-btn"]}>
        Add Book
      </Button>
    </Form>
  );
}
