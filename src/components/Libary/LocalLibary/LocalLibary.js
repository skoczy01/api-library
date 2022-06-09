import React, { useState, useContext } from "react";
import LocalLibaryItems from "./LocalLibaryItems/LocalLibaryItems";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Form from "../../UI/Form";
export default function LocalLibary() {
  const [books, setBooks] = useState([
    {
      id: 0,
      image: "",
      title: "Harry Potter",
      author: "J.K. Rowling",
      publishedDate: "2018",
      category: "Fantasy literature",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur maiores vero deleniti, eius animi laboriosam quo perspiciatis reprehenderit vitae, molestias magni debitis cum necessitatibus nam quisquam veniam quam deserunt ipsa, quibusdam obcaecati a suscipit neque non? Repellat architecto, quas dicta saepe suscipit numquam temporibus cum facilis hic quidem vitae quae.",
      link: "",
    },
    {
      id: 1,
      image: "",
      title: "This Time Tomorrow",
      author: "Emma Straub",
      publishedDate: "2018",
      category: "Women's Fiction",
      description: "",
      link: "",
    },
  ]);
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
    setBooks((prev) => [
      ...prev,
      {
        id: books.length,
        title: titleName,
        author: authorName,
        publishedDate: publishedDate,
        category: categoryValue,
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
    setBooks(books.filter((book) => book.id !== id));
  };
  //Filter items function
  const filtersItems = books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(filterName);
  });
  return (
    <div>
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
        <Button type="submit">Add Book</Button>
        <Input
          type="text"
          id="filter"
          onInputChange={(event) =>
            setFilterName(event.target.value.toLowerCase())
          }
          placeholder={books.length ? "Search by title" : "Libary is empty"}
          disabled={books.length ? false : true}
        >
          Filter Book
        </Input>
      </Form>

      {books.length ? (
        <LocalLibaryItems books={filtersItems} deleteHandler={deleteHandler} />
      ) : (
        <p className="notfound">Not found any book, maby add some?</p>
      )}
    </div>
  );
}
