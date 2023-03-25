import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

import {useState, createContext} from "react";

export const TodoContext = createContext();

function App() {
  const [todo, setTodo] = useState({todoTitle: "", todoContent: ""});
  const [todos, setTodos] = useState([]);

  const valueProvider = {
    todo, setTodo, todos, setTodos
  }

  return (
    <TodoContext.Provider value={valueProvider}>
      <div className="App">
        <Navbar />
        <TodoList todosMap={todos} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
