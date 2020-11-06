import React from "react";
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleComplete, removeTodo}) => {

  return (
    <div className="card">
      <div className="card-header">
        <strong>TODO LIST</strong>
      </div>
      <div className="card-body">
        {todos.map(todo =>(
          <TodoItem key ={todo._id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;
