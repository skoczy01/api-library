import React, { useState, useEffect, createContext, useReducer } from "react";
import "./App.scss";
import ApiLibary from "./components/Libary/ApiLibary/ApiLibary";
import LocalLibary from "./components/Libary/LocalLibary/LocalLibary";

const initialBooks = [
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
];
function App() {
  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : initialBooks;
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <div className="App">
      <LocalLibary books={books} setBooks={setBooks} className="local-libary" />
      <ApiLibary books={books} setBooks={setBooks} className="api-libary" />
    </div>
  );
}

export default App;
