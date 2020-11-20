import React, {useState} from "react";
import {toast} from 'react-toastify'
import * as todoService from './todoService'

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const {token} = await JSON.parse(localStorage.getItem('authorization'))
      const response = await todoService.createTask(todo,token)
      if(response.status === 201){
        addTodo({_id:response.data._id, task: response.data.task , isComplete: response.data.isComplete})
        setTodo({...todo, task : ''})
        toast.success('task created succesfully')
      }else{
        toast.warning('the task could not be created')
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header">
          <strong>ADD TODO</strong>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              name="task"
              className="form-control"
              autoFocus
              value= {todo.task}
              onChange={handleTaskInputChange}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
