import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { levels } from "../../models/levels.enum";
import "./../../styles/task.scss";

//Importamos la hoja de estilos
//import '../../styles/task.scss'

const TaskComponent = ({ task, manageTask }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case levels.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case levels.URGENTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case levels.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i onClick={()=>manageTask(task, "complete")}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    } else {
      return (
        <i onClick={()=>manageTask(task, "complete")}
          className="bi-toggle-off task-action"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">{taskIconCompleted()}
        <i className="bi-trash task-action" style={{ color: "tomato" }} onClick={()=>{manageTask(task, "remove")}}></i>
        </td>
    </tr>
    /*<div>
      <h2 className="task-name">
        Nombre: {task.name}
      </h2>
      <h3>
        Descripción: {task.description}
      </h3>
      <h4>
        Nivel: {task.level}
      </h4>
      <h5>
        Esta tarea está: {task.completed ?'COMPLETADA':'PENDIENTE'}
      </h5>
    </div>*/
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  manageTask: PropTypes.func.isRequired
};

export default TaskComponent;
