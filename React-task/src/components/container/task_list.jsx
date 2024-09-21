
import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, levels.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, levels.URGENTE);
    const defaultTask3 = new Task('Example3', 'Description 3', false, levels.BLOCKING);


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      console.log("Task state is been modified");
      setLoading(false);
      return () => {
        console.log("TaskList component is going to unmount...")
      }
    }, [tasks])
    
    return (
    <div>
      <div className="col-12">
        <div className='card'>
            <div className='card-header p-3'>
            <h5>Tus tareas:</h5>
            </div>
        <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position: "relative", height: "400px"}}>
        <table>
            <thead>
            <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task, index)=>{
                    return (
                        <TaskComponent 
                            key={index} 
                            task={task}>
                            </TaskComponent>
                    )
                })}
            </tbody>
        </table>
        </div>
        <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  )
}

export default TaskListComponent
