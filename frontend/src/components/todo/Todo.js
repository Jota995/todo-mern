import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import * as todoService from "./todoService";
import { toast } from "react-toastify";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const loadTodos = async () => {
    try {
      const { token } = await JSON.parse(localStorage.getItem("authorization"));
      const response = await todoService.getTasks(token);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleComplete = async (id, isComplete) => {
    const { token } = await JSON.parse(localStorage.getItem("authorization"));
    const response = await todoService.toggleComplete(id, isComplete, token);
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
      const { token } = await JSON.parse(localStorage.getItem("authorization"));
      const response = await todoService.deleteTask(id, token);
      if (response.status === 200) {
        toast.success("task deleted succesfully");
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
