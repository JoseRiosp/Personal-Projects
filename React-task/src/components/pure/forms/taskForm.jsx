import React, { useRef } from 'react'
import PropTypes from "prop-types";
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({manageTask}) => {

  const refName = useRef("");
  const refDescription =useRef("");
  const refLevel= useRef(levels.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task (
      refName.current.value,
      refDescription.current.value,
      false,
      refLevel.current.value
    );
    manageTask(newTask, "add");
  }

  return (
    <div id="add-task-form" hidden>
      <form onSubmit={addTask}>
        <div id="inputs-div">
          <input ref={refName} id="input-name" type="text" className='form-control' required autoFocus placeholder='Name of your task'></input>
          <input ref={refDescription} id="input-description" type="text" className='form-control form-control-lg' required placeholder='Description'></input>
          <label htmlFor='select-level' className='sr-only'>Priority</label>
          <select ref={refLevel} defaultValue={levels.NORMAL} id="select-level">
            <option value={levels.NORMAL}>
                Normal
            </option>
            <option value={levels.URGENTE}>
                Urgent
            </option>
            <option value={levels.BLOCKING}>
              Blocking
            </option>
          </select>
        </div>
        <button type='submit' className='btn btn-outline-success'>Add Task</button>
      </form>
    </div>
  )
}

TaskForm.propTypes={
  manageTask: PropTypes.func.isRequired
};

export default TaskForm
