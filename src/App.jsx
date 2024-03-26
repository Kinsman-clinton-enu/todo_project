import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isModalOpen, setModalClose] = useState(false);
  const [newInputValue, setInputValue] = useState("");
  
  function deleTask(taskId){
    const newList = todoList.filter(todo => {
      return taskId === todo.id ? false : true;
    })
    setTodoList(newList)
  }
  function changeHandler(event) {
    setInputValue(event.target.value);
  }
  function modalHandler(){
    setModalClose(true);
  }
  function cancelHandler(){
    setModalClose(false);
  }
  function addTask() {
    const todo = {
      id: todoList.length === 0  ? 1 : todoList[todoList.length-1].id + 1,
      task: newInputValue,
    };
    !newInputValue ? null :setTodoList( [...todoList, todo]);
  }
  return (
    <div className="App">
      <div className="addTask">
        <h1>My Todos</h1>
        <input type="text" onChange={changeHandler} placeholder="Add some task"/>
        <button className="btn" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="card">   
        {todoList.map((todo) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="list">
               <h2>{todo.task}</h2>
              <div className="actions"></div>
              <button className="btn" onClick={modalHandler}>  
                Delete
              </button>
              {isModalOpen && <Modal  onCancel={cancelHandler} onConfirm={()=> deleTask(todo.id)}/>}
            </div> 
          );
        })}
      </div>
      
    </div>
  );
}

export default App;