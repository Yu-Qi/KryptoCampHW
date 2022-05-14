import React, { useState } from "react";
import data from "./data.json";
import Header from "./Header";
import Board from "./Board";

function App() {
  // const [toDoList, setToDoList] = useState(data); //todo
  const [getBoard, setBoard] = useState(data)
  const [userInput, setBoardForm] = useState("")
  // const userInput ="";
  const addBoard = (userInput ) => {
    let copy = [...getBoard];
    copy = [...copy, { id: getBoard.length + 1, name: userInput, data:[]}];
    setBoard(copy);
  }
 
  const handleChange = (e) => {
    setBoardForm(e.currentTarget.value)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard(userInput);
    setBoardForm("");
}
  return (
    <div className="App">
      {/* <button onClick={() => handleToggle(3)}>Test</button> */}
      <Header />
      <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="輸入代辦清單名稱..."/>
            <button>新增代辦清單</button>
        </form>
      <Board getBoard={getBoard} setBoard={setBoard} />
      {/* <ToDoForm addTask={addTask}/>
      <ToDoList
        toDoList={toDoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle} */}


    </div>
  );
}
export default App;
