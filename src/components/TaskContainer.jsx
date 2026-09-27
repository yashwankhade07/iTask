import React from 'react'
import Task from './Task'

const TaskContainer = ({ data,deletefunc,toggleTask }) => {
  return (
    <div className="task-container">
      {data.map((task)=>(

      <Task key={task.id} data={task} deletefunc={deletefunc} toggleTask={toggleTask}/>
      ))}
    </div>
  )
}

export default TaskContainer
