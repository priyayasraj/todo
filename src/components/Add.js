import React from "react";

const Add = ({ input, setInput, todoList, setTodoList }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const AddTask = () => {
    if (input !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: input,
        isCompleted: false,
      };

      setTodoList([...todoList, taskDetails]);
    }
  };
  return (
    <div className="ui form">
      <input
        type="text"
        value = {input}
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="ui button" onClick={AddTask}>
        Add
      </button>
    </div>
  );
};

export default Add;
