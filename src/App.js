import React, { useState } from "react";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className=" ui container">
      <h1 className="ui header">Todo List</h1>
      <Add
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};
export default App;
