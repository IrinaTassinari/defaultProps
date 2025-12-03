// import './App.css'
import ToDoItem from "./components/ToDoItem"

function App() {
 return(
  <div className="App">
      <ToDoItem text='Learn React' isCompleted = {true}/>
      <ToDoItem/>

  </div>
 )
}

export default App
