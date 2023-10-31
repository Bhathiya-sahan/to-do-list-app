import React,{useState, useEffect} from 'react';
import './App.css';
import {AiFillDelete} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';


function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState("");

  const handleAddNewToDo =()=>{
    let newToDoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr =[...allTodos];
    updatedTodoArr.push(newToDoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo = (index)=>{
    let reducaedTodo = [...allTodos];
    reducaedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducaedTodo));
    setTodos(reducaedTodo);
  };

  const handlComplete = (index) =>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours() ;
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completeOn = dd + '-' + mm + '-' + yyyy + 'at' + h + ':' + m + ':' + s;

    let filteredItem ={
      ...allTodos[index],
      completeOn:completeOn
    }

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
  }


  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])

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
         {isCompletedScreen === false && allTodos.map((item,index)=>{
          return(

            <div className='todo-list-item' key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div>
              <AiFillDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
              <AiFillCheckCircle className='check-icon' onClick={()=>handlComplete(index)} title='Complete?'/>
            </div>

          </div>
          )
         })}


      {isCompletedScreen === true && completedTodos.map((item,index)=>{
          return(

            <div className='todo-list-item' key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed on: {item.completeOn}</small></p>
            </div>

            <div>
              <AiFillDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
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
