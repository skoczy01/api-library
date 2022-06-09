import React, { Fragment, createContext } from "react";
import "./App.scss";
import ApiLibary from "./components/Libary/ApiLibary/ApiLibary";
import LocalLibary from "./components/Libary/LocalLibary/LocalLibary";
const books = [
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

const Books = React.createContext(books);
function App() {
  return (
    <Fragment>
      <Books.Provider value={books}>
        <LocalLibary />
        <ApiLibary />
      </Books.Provider>
    </Fragment>
  );
}

export default App;
