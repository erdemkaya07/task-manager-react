import React, { useContext } from 'react'
import TaskShow from './TaskShow'
import TaskContext from '../context/task'


function TaskList() {

  const { tasks } = useContext(TaskContext)

  return (
    <div className='task-list'>
      {/*taskc variabledan gelen veriyi map metoduyla liste icinde donuyoruz */}
      {tasks.map((task, index) => {
        return (
          <TaskShow key={index} task={task}/>
        )
      })}
    </div>
  )
}

export default TaskList