import React from "react";
import "./App.scss";
import { BrowserLibrary } from "./components/Library/ApiLibrary/BrowserLibrary";
import { LocalLibrary } from "./components/Library/LocalLibrary/LocalLibrary";
import { BooksProvider } from "./components/store/BooksProvider";

export function App() {
  return (
    <div className="App">
      <BooksProvider>
        <LocalLibrary className="local-libary" />
        {/* <BrowserLibrary className="api-libary" /> */}
      </BooksProvider>
    </div>
  );
}
