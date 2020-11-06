import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="card" style={{textDecoration : todo.isComplete ? "line-through" : null, cursor:'pointer'}}>
      <div className="card-body d-flex justify-content-between">
        {todo.task}
        <div>
          <i
            className="material-icons"
            style={{ cursor: "pointer" }}
            onClick={() => toggleComplete(todo._id, todo.isComplete)}
          >
            check
          </i>
          <i
            className="material-icons"
            style={{ cursor: "pointer" }}
            onClick={() => removeTodo(todo._id)}
          >
            close
          </i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
