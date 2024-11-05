
import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from '../pure/forms/taskForm'
import { sendLocalStorage } from '../../models/localstorage'
import getLocalStorage from '../../models/localstorage'

const TaskListComponent = () => {
    //Tomar los datos del local storage
    const taskListData= getLocalStorage()
    /*
    const defaultTask = new Task('Example', 'Default description', true, levels.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, levels.URGENTE);
    const defaultTask3 = new Task('Example3', 'Description 3', false, levels.BLOCKING);*/
    //Estado del componente
    const [tasks, setTasks] = useState(taskListData);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      console.log("Task state is been modified");
        let time;
        if(tasks.length<5){
          time=1000;
        } else {
          time=2000;
        }
      
      setTimeout(() => {
        setLoading(false)
      }, time);
      return () => {
        console.log("TaskList component is going to unmount...")
      }
    }, [tasks])

    function managingTask(task, option){
      console.log(`${option} this task: ${task}`);
      const index= tasks.indexOf(task);
      const tempTask=[...tasks];

      switch (option) {
        case "complete" :
          tempTask[index].completed=!tempTask[index].completed;
          setTasks(tempTask);
          break;
        case "remove": 
          alert(`Task "${tempTask[index].name}" deleted!`)
          tempTask.splice(index,1);
          setTasks(tempTask);
          break;
        case "add":
          tempTask.push(task);
          setTasks(tempTask);
          break;
        default:
      }
      sendLocalStorage(tempTask)}
      /*
      if(option="complete"){
      tempTask[index].completed=!tempTask[index].completed;
      setTasks(tempTask);

      } else if 
      
      (option="remove"){
      alert(`Task "${tempTask[index].name}" deleted!`)
      tempTask.splice(index,1);
      setTasks(tempTask);
      } 

      else if 
      (option="add"){
      tempTask.push(task);
      setTasks(tempTask)
      } 

    }
/*
    function completeTask (task, number){
      console.log("Complete this task:", task);
      const index= tasks.indexOf(task);
      const tempTask=[...tasks];
      tempTask[index].completed=!tempTask[index].completed;
      setTasks(tempTask);
    }

    function deleteTask(task, number){
      console.log("Delete this task:", task);
      const index= tasks.indexOf(task);
      const tempTask=[...tasks];
      alert(`Task "${tempTask[index].name}" deleted!`)
      tempTask.splice(index,1);
      setTasks(tempTask);
    }

    function addTask(task){
      console.log("Add this task:", task);
      const index= tasks.indexOf(task);
      const tempTask=[...tasks];
      tempTask.push(task);
      setTasks(tempTask)
    }*/
    
      function showAddTask(){
        const greenBtn = document.getElementById("add-task-form");
        greenBtn.toggleAttribute("hidden");
      }

      const taskTable= ()=>{
        const table = <table>
        <thead>
        <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
        </tr>
        </thead>
        <tbody>
            {tasks.map((currentTask, index)=>{
                return (
                    <TaskComponent 
                        key={index} 
                        task={currentTask}
                        manageTask={managingTask}>
                        </TaskComponent>
                        
                )
            })}
            
        </tbody>
    </table>

    if(tasks.length > 0){
      return table;
          } else {
            return <div>
              <h3>There are no tasks to show</h3>
              <h6>Click <i className='bi bi-file-plus' style={{color: 'green'}}></i> to create a new one: </h6>
            </div>
}
      }
      const loadingStyle={
        //Lets put some animaition (spinner) for the loading page
        color: 'grey',
        fontSize: '20px',
        fontWeight: 'bold'
      }
    return (
    <div>
      <div className="col-12">
      <TaskForm manageTask={managingTask} nTasks={tasks.length}></TaskForm>
        <div className='card'>
            <div className='card-header p-3' style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"8rem"}}>
            <i className='bi bi-archive-fill'></i>
            <h5>Your tasks</h5>
            <button className='btn btn-success bi-file-plus' onClick={showAddTask} style={{borderRadius:"3rem"}}></button>
            </div>
        <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position: "relative", height: "400px"}}>
          {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : taskTable()}
        </div>
        </div>
      </div>
    </div>
  )
}

export default TaskListComponent
