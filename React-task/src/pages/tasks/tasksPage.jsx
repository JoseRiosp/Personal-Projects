import React from 'react'
import TaskListComponent from '../../components/container/task_list'
import NavButtons from '../../hooks/navButtons'

function TasksPage() {
  return (
    <div>
      <NavButtons></NavButtons>
      <TaskListComponent></TaskListComponent>
    </div>
  )
}

export default TasksPage
