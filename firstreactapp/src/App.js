import React from "react";
import logo from "./chinmay_logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="150" height="150" className="logo" />
        <h1 className="app-title">To-Do App</h1>
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-txt"
            placeholder="Write a To-Do"
          />
          <button className="add-btn">Add TODO</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Do Some Homework
                <button className="btn"> Delete  </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
