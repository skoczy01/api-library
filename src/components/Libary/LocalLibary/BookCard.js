import React from "react";
import Button from "../../UI/Button";

export default function BookCard(props) {
  return (
    <div className="card">
      <div className="first-section">
        <div className="data">
          <p>
            Title:
            <span>{props.title}</span>
          </p>
          <p>
            Author:
            <span>{props.author}</span>
          </p>
          <p>
            Category:
            <span>{props.category}</span>
          </p>
        </div>
        <a href={props.link}>
          <img src={props.image} alt={props.id} />
        </a>
      </div>
      <div className="second-section">
        <p className="description">
          Description:{" "}
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            at?
          </span>
        </p>
        <p>
          Published Date: <span>2018</span>
        </p>
      </div>
      <Button
        onClick={() => {
          props.deleteHandler(props.id);
        }}
      >
        Remove
      </Button>
    </div>
  );
}
