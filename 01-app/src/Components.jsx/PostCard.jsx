import React from "react";

const PostCard = (props) => {
  return (
    <div className=" shadow-lg p-6 rounded-xl py-10 my-10 bg-white">
      <h3 className="font-bold text-xl text-center mb-5">{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
