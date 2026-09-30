import React from 'react'
import Task from './Task'

const TaskContainer = ({ data,setGetId,toggleTask,setClickDelete, isEmpty }) => {
  return (
    <div className="task-container">
      {data.length == 0 ? <h2 style={{color:"gray"}}>No Task Present</h2>:
      data.map((task)=>(
        <Task key={task.id} data={task} setGetId={setGetId} toggleTask={toggleTask} setClickDelete={setClickDelete}/>
      ))
    }
      
    </div>
  )
}

export default TaskContainer
