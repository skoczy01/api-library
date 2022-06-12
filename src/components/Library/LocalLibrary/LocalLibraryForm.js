import React, { useState } from "react";

import { Form } from "../../UI/Form";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import classes from "./LocalLibrary.module.scss";

export function LocalLibraryForm(props) {
  const [titleName, setTitleName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [filterName, setFilterName] = useState("");
  const [errorValue, setErrorValue] = useState(null);

  const clearAllInputValues = () => {
    setTitleName("");
    setAuthorName("");
    setPublishedDate("");
    setCategoryValue("");
    setDescriptionValue("");
    setErrorValue("");
  };
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
  return (
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
    </Form>
  );
}
