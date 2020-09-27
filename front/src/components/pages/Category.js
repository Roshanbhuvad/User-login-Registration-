import React from "react";
import "./category.css";
//import data from "./data";

export default function Category(props) {
  return (
    <div className="genre-container">
      <img src={props.post.url} alt="" />
      <div className="description-bg">
        <span className="genre-title">{props.post.title}</span>
        <br />
        <span className="post-count">Posts: {props.post.postcount}</span>
      </div>
    </div>
  );
}
