import React,{useState} from 'react';
import './App.css';


function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);
  return (
    <div className="App">
     <h1>To Do List</h1>
     <div className='todo-wrapper'>
        <div className='todo-input'>

          <div className='todo-input-item'>
            <lablel>Title</lablel>
            <input type='text' placeholder="What's the task"/>
          </div>

          <div className='todo-input-item'>
            <lablel>Description</lablel>
            <input type='text' placeholder="What's the description"/>
          </div>

          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
          </div>
        <div className='btn-area'>
          <button className={`second-btn ${isCompletedScreen === false && 'active'}`} onClick={() => setIsCompletedScreen (false)}>To Do</button>
          <button className={`second-btn ${isCompletedScreen === true && 'active'}`} onClick={() => setIsCompletedScreen (true)}>Completed</button>
        </div>

        <div className='todo-list'>
          <div className='todo-list-item'>
            <h3>tast1</h3>
            <p>description</p>
          </div>
        </div>

        </div>
     </div>
    
    
  );
}

export default App;
