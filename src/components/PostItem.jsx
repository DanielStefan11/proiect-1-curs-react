import React from "react";
import "./styling/PostItem.css";

function PostItem(props) {
  const { id, title, content, handleDeletePost } = props;

  return (
    <div className="post-item">
      <div className="item-info">
        <h3>{title}</h3>
        <div className="title-underline"></div>
        <p>{content}</p>
      </div>
      <button>
        <i
          className="fas fa-times fa-2x"
          onClick={() => handleDeletePost(id)}
        ></i>
      </button>
    </div>
  );
}

export default PostItem;
