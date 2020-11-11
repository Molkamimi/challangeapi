import React from "react";
import Comment from "./Pages/Comments";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((el) => (
        <Comment comment={el} />
      ))}
    </div>
  );
}

export default CommentList;
