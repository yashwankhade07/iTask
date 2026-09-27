import React from 'react'

const Task = ({data,deletefunc,toggleTask}) => {
  return (
    <div className="task">
          <input type="checkbox" name="" id="" onChange={()=>toggleTask(data.id)} checked={data.complete} />
          <h4 className='h4' >{data.task}</h4>
          <span>
          <button onClick={()=>{deletefunc(data.id)}}>Delete</button>
          </span>
        </div>
  )
}

export default Task
