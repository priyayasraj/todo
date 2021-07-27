import React from 'react';

const TodoList = ({ todoList, setTodoList }) => {
  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = todoList.findIndex((elem) => elem.id === id);
    const newTaskList = [...todoList];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTodoList(newTaskList);
    console.log(todoList);
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return { todoList } !== [] ? (
    <ul className="ui list">
      {todoList.map((todo) => (
        <li>
          {todo.value}
          <div className="ui checkbox">
            <input
              type="checkbox"
              onChange={(e) => taskCompleted(e, todo.id)}
            />
            <label>Mark as complete</label>
          </div>
          <button className="ui button" onClick={(e) => deletetask(e, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default TodoList;
