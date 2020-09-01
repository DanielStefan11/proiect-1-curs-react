import React from "react";
import PostItem from "./PostItem";
import "./styling/PostList.css";

function PostList(props) {
  const { posts, handleDeletePost } = props;

  return (
    <div className="post-list">
      <h2>Postări</h2>
      <div className="posts-container">
        {posts.map((post, index) => {
          return (
            <PostItem
              id={post.id}
              title={post.title}
              content={post.body}
              key={index}
              handleDeletePost={handleDeletePost}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
