import React from "react";

const TodoItem = (props) => {
  return (
    <li className="flex items-center justify-between mb-3">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="ml-2">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
