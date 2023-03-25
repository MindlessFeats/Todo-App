import React, {useContext} from "react";
import {TodoContext} from "../App";

const Todo = (props) => {
  const todoObj = useContext(TodoContext);
  return (
    <div className="card my-2 text-secondary">
      <div className="card-header">{props.todoTitle}</div>
      <div className="card-body">{props.todoContent}</div>
    </div>
  );
};

export default Todo;
