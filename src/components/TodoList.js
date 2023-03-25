import React, {useContext} from "react";
import Todo from "./Todo";
import Textarea from "./Textarea";
import {TodoContext} from "../App";

const TodoList = props => {
  const todoObj = useContext(TodoContext);
  console.log(todoObj);

  // Problem: State after pushed into the array is cleared, clearing the item pushed into the array.

  const handleClick = e => {
    e.preventDefault();
    todoObj.addTodo = "true";
    todoObj.setTodos((currentTodo) => [...currentTodo, todoObj.todo] )
  };

  return (
    <div className="container my-5">
      <h1 className="text-primary">Add a Todo</h1>
      <Textarea handleClick={handleClick} />
      <div className="my-5">
        <h2 className="text-primary">Your Todos</h2>
        <div className="todos">
          {props.todosMap.map((todoItem, i) => (
            <Todo
              key={i}
              todoTitle={todoItem.todoTitle}
              todoContent={todoItem.todoContent}
            />
          ))}
          {/* {props.todosMap.map(todoItem => {
            console.log("Todo Itme", todoItem); // Testing output
            return (
              <Todo
                key={todoItem.id}
                todoTitle={todoItem.todoTitle}
                todoContent={todoItem.todoContent}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
