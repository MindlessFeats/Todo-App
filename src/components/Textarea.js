import React, {useContext} from "react";
import {TodoContext} from "../App";

const Textarea = (props) => {
  const todoObj = useContext(TodoContext);
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="todoTitle" className="form-label">
          Todo title
        </label>
        <input
          type="text"
          className="form-control"
          id="todoTitle"
          value={todoObj.todoTitle}
          onChange={e =>
            todoObj.setTodo({...todoObj.todo, todoTitle: e.target.value})
          }
          aria-describedby="todoTitle"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoContent" className="form-label">
          Enter Todo Content...
        </label>
        <textarea
          className="form-control"
          name="todoContent"
          value={todoObj.todoContent}
          onChange={e =>
            todoObj.setTodo({...todoObj.todo, todoContent: e.target.value})
          }
          id="todoContent"
          rows="3"
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={props.handleClick}
      >
        Add Todo
      </button>
    </form>
  );
};

export default Textarea;
