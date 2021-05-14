import React from 'react'

const Book = (props) => {
    const { img, title, author, age } = props.book;
    const clickHandler = () => {
      alert("hello world");
    };
    const clickHandler2 = (author) => {
      alert(author);
    };
    return (
      <article className="book">
        <img className="small" src={img} alt="" />
        <h1
          onClick={() => {
            console.log(title);
          }}
        >
          {title}
        </h1>
        <h2>{author}</h2>
        <p>{age}</p>
        <div className="container">
          <button className="btn" type="button" onClick={clickHandler}>
            Click me
          </button>
          <button
            className="btn2"
            onClick={() => {
              clickHandler2(author);
            }}
          >
            click me too
          </button>
        </div>
      </article>
    );
  };
  export default Book