import React, { createContext } from "react";

export const BooksContext = createContext({
  books: [
    {
      id: 0,
      image: "",
      title: " ",
      author: "",
      publishedDate: "",
      category: "",
      description: "",
      link: "",
    },
  ],
  addItem: (item) => {},
  removeItem: (id) => {},
});
