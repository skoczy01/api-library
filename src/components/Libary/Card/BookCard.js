import React from "react";
import Button from "../../UI/Button";
import classes from "./BookCard.module.scss";
const initialImage =
  "http://books.google.com/books/content?id=Nd1bAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";
const notEnteredValue = (
  <span className={classes["not-entered"]}>Not entered</span>
);
export default function BookCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes["first-section"]}>
        <ul className={classes["data-list"]}>
          <li className={props.title.length > 30 ? classes.active : null}>
            Title:
            {props.title ? <span>{props.title}</span> : notEnteredValue}
          </li>
          <li>
            Author:
            {props.author ? <span>{props.author}</span> : notEnteredValue}
          </li>
          <li className={props.category.length > 25 ? classes.active : null}>
            Category:
            {props.category ? <span>{props.category}</span> : notEnteredValue}
          </li>
        </ul>
        <a href={props.link}>
          <img src={props.image ? props.image : initialImage} alt={props.id} />
        </a>
      </div>
      <ul className={classes["second-section"]}>
        <li
          className={
            props.description.length > 50 ? classes["description-active"] : null
          }
        >
          Description:{" "}
          {props.description ? (
            <span>{props.description}</span>
          ) : (
            notEnteredValue
          )}
        </li>
        <li>
          Published Date:{" "}
          {props.publishedDate ? (
            <span>{props.publishedDate}</span>
          ) : (
            notEnteredValue
          )}
        </li>
      </ul>
      {props.name === "local" ? (
        <Button
          className={classes["card-btn"]}
          onClick={() => {
            props.deleteHandler(props.id);
          }}
        >
          Remove
        </Button>
      ) : (
        props.children
      )}
    </div>
  );
}
