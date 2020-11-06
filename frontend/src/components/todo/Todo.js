import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import * as todoService from "./todoService";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  //const [user, setUser] = useState('');

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const loadTodos = async () => {
    const response = await todoService.getTasks("5f9f3b826762f835b8d0d871");
    setTodos(response.data);
  };

  const toggleComplete = async (id, isComplete) => {
    const response = await todoService.toggleComplete(id, isComplete);
    if (response.status === 200) {
      setTodos(
        todos.map((todo) => {
          if (todo._id === id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        })
      );
    }
  };

  const removeTodo = async (id) => {
    let confirm = window.confirm("¿estas seguro de eliminar esta tarea?");
    if (confirm === true) {
      const response = await todoService.deleteTask("5f9f3b826762f835b8d0d871",id);
      if (response.status === 200) {
        alert("task deleted succesfully");
        setTodos(todos.filter((todo) => todo._id !== id));
      }
      console.log(response);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        </div>
      </div>
  );
};

export default Todo;
