
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TaskContainer from './components/TaskContainer'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [SearchInput,setSearchInput]= useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      complete: false,
      task: "run"
    },
    {
      id: 2,
      complete: true,
      task: "learn"
    },
  ])
  const [displayTask, setDisplayTask] = useState(tasks)
  const [addForm, setAddForm] = useState(false)
  function displayForm() {
    setAddForm(true)
  }
  const handleSearch=(e)=>{
    const searched = tasks.filter((task)=>task.task.toLowerCase().replaceAll(" ", "").includes(e.toLowerCase().replaceAll(" ", "")))
    setDisplayTask(searched)
    setSearchInput(e)
  }
  const handleInput=(e)=>{
    setInputValue(e.target.value)
  }
  const addTask=()=>{
       const updatedTask = [...tasks, {
        id: tasks.length + 1,
        complete:false,
        task:inputValue
      }]
      setTasks(updatedTask)
      setDisplayTask(updatedTask)
      setAddForm(false)
  }
  const deleteTask=(id)=>{
    const newTasks = tasks.filter((task)=>{
      return task.id !== id
  })
  setTasks(newTasks)
  setDisplayTask(newTasks)

  }
  const completedTasks = ()=>{
    setDisplayTask(tasks.filter((task)=>(task.complete==true)))
  }
  const NotCompletedTasks = ()=>{
    setDisplayTask(tasks.filter((task)=>(task.complete==false)))
  }

  const toggleTask = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, complete: !task.complete }
      : task
  )

  setTasks(updatedTasks)
  setDisplayTask(updatedTasks)
}

  return (
    <>
      <div className="main">
        <h1 className='heading'>iTask</h1>
        <SearchBar btnClick={displayForm} inputValue={SearchInput}  handleSearch={handleSearch} />
        <div className="complete-task">
          <button onClick={()=>setDisplayTask(tasks)}>All tasks</button>
          <button onClick={NotCompletedTasks}>Not Completed</button>
          <button onClick={completedTasks}>Completed</button>
        </div>
        <TaskContainer data={displayTask} deletefunc={deleteTask} toggleTask={toggleTask}/>
      </div>
      {addForm && <div className="add-form">
        <form action="" className="add-form">
        <button className='x' onClick={()=>setAddForm(false)}>X</button>
        <input required type="text" placeholder='Add task' value={inputValue} onChange={handleInput}/>
        <button onClick={addTask}>ADD</button>
        </form>
      </div>}
    </>
  )
}

export default App
