import './App.css';
import imageOne from './time.jpg';
import imageTwo from './checklist.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div>
      <div className="app">
        <div className="container"> 
          <img src={ imageOne } width="175px" alt="time"/>
        </div>
        <div className="container">
          <h1>To Do List</h1>
        </div>
        <ToDoList/>
        <div className="container">
          <img className="picture" src={ imageTwo } width="200px" alt="checklist"/>
        </div>      
      </div>
      <div className="par">
        <p>All materials were taken from www.freepick.com and presented here for educational purposes.</p>
      </div>
    </div>
  )
}

export default App;

