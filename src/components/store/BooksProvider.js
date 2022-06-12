import { BooksContext } from "./BooksContext";

export const BooksProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};
  const bookContext = {
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
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <BooksContext.Provider value={bookContext}>
      {props.children}
    </BooksContext.Provider>
  );
};
