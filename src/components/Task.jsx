import React from 'react'

const Task = ({ data, setGetId, toggleTask, setClickDelete }) => {
  return (
    <div className="task">
      <span style={{
        display:"flex",
        alignItems:"center",
        gap:"5px"
      }}>
      <input type="checkbox" name="" id="" onChange={() => toggleTask(data.id)} checked={data.complete} />
      <h4 className='h4' >{data.task}</h4>
      </span>
      <span>
        <button onClick={() =>{setClickDelete(true);setGetId(data.id)}}>Delete</button>
      </span>
    </div>
  )
}


export default Task
