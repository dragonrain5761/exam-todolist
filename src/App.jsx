import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, contents: "자바스크립트를 배워봅시다." },
  ]);

  const [contents, setContents] = useState("");

  const contentsOnchangeHandler = (event) => {
    setContents(event.target.value);
    console.log(contents);
  };

  const todoOnclickHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      contents: contents,
    };

    setTodo([...todo, newTodo]);
    setContents("");
  };

  return (
    <div className="layout">
      <div className="input-group">
        <input
          type="text"
          value={contents}
          onChange={contentsOnchangeHandler}
        ></input>
        <button onClick={todoOnclickHandler}>추가하기</button>
      </div>

      <div className="title">
        <h2>Todo List</h2>
      </div>

      <div className="todo-group">
        {todo.map((item) => {
          return (
            <div className="todo-box" key={item.id}>
              <p>{item.contents}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
