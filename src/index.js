import React from "react";
import ReactDom from "react-dom";

///CSS///
import "./index.css";

import { books } from "./books";
import Book  from "./book";

// import img from "./images/pic1.jpg";
// import img2 from './images/pic3.jpg';

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
