import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li className="list-item">
          <label>
            <input type="checkbox" id="list-item" />
          </label>
          <btn className="btn btn-danger">Delete</btn>
        </li>
      </ul>
    </>
  );
}

export default App;
