import React from "react";
import "./styling/PostItem.css";
// React icons
import { GrClose } from "react-icons/gr";

function PostItem(props) {
  const { id, title, content, handleDeletePost } = props;

  return (
    <div className="post-item">
      <div className="item-info">
        <h3>{title}</h3>
        <div className="title-underline"></div>
        <p>{content}</p>
      </div>
      <button onClick={() => handleDeletePost(id)}>
        <GrClose size="1.5rem" />
      </button>
    </div>
  );
}

export default PostItem;
