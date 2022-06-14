import React, { useReducer, useEffect } from "react";
import { BooksContext } from "./BooksContext";

const initBooksState = {
  books: [
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
  ],
};

const initialBooks = () => {
  const localData = localStorage.getItem("books");

  if (localData) {
    return { books: JSON.parse(localData) };
  }
  if (!localData) {
    return initBooksState;
  }
};
const booksReducer = (state, action) => {
  if (action.type === "ADD_BOOK") {
    const existingBookById = state.books.some(
      (item) => item.id === action.book.id
    );
    if (existingBookById) {
      return {
        books: state.books,
      };
    } else {
      const updatedBooks = state.books.concat(action.book);
      return {
        books: updatedBooks,
      };
    }
  }
  if (action.type === "REMOVE_BOOK") {
    const updatedBooks = state.books.filter((book) => book.id !== action.id);
    return {
      books: updatedBooks,
    };
  }
  return initBooksState;
};
export const BooksProvider = (props) => {
  const [booksState, dispatchBooksAction] = useReducer(
    booksReducer,
    initBooksState,
    initialBooks
  );
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(booksState.books));
  }, [booksState.books]);
  const addItemHandler = (item) => {
    dispatchBooksAction({ type: "ADD_BOOK", book: item });
  };

  const removeItemHandler = (id) => {
    dispatchBooksAction({ type: "REMOVE_BOOK", id: id });
  };
  const bookContext = {
    books: booksState.books,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <BooksContext.Provider value={bookContext}>
      {props.children}
    </BooksContext.Provider>
  );
};
