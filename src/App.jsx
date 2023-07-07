import { useState } from "react";
import { TodoForm } from "./TodoForm";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, completed) {
    setTodos((currentTodo) => {
      currentTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodo) => {
      currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm handleSubmit={handleSubmit} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((item) => {
          <li className="list-item">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <btn onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
              Delete
            </btn>
          </li>;
        })}
      </ul>
    </>
  );
}

export default App;
