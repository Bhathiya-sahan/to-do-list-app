import React,{useState} from 'react';
import './App.css';
import {AiFillDelete} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';


function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddNewToDo =()=>{
  let newToDoObj = {
    title: newTitle,
    description: newDescription,
  };

  let updatedTodoArr =[...allTodos];
  updatedTodoArr.push(newTodoItem);
  setTodos(updatedTodoArr);
}

  return (
    <div className="App">
     <h1>To Do List</h1>
     <div className='todo-wrapper'>
        <div className='todo-input'>

          <div className='todo-input-item'>
            <lablel>Title</lablel>
            <input type='text' value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder="What's the task"/>
          </div>

          <div className='todo-input-item'>
            <lablel>Description</lablel>
            <input type='text' value={newDescription} onChange={e=>setNewDescription(e.target.value)} placeholder="What's the description"/>
          </div>

          <div className='todo-input-item'>
            <button type='button' onClick={handleAddNewToDo} className='primaryBtn'>Add</button>
          </div>
          </div>
        <div className='btn-area'>
          <button className={`second-btn ${isCompletedScreen === false && 'active'}`} onClick={() => setIsCompletedScreen (false)}>To Do</button>
          <button className={`second-btn ${isCompletedScreen === true && 'active'}`} onClick={() => setIsCompletedScreen (true)}>Completed</button>
        </div>

        <div className='todo-list'>
         {allTodos.map((item,index)=>{
          return(

            <div className='todo-list-item' key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div>
              <AiFillDelete className='icon'/>
              <AiFillCheckCircle className='check-icon'/>
            </div>

          </div>
          )
         })}
        </div>

        </div>
     </div>
    
    
  );
}

export default App;
