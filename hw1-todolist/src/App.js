import React, { useState } from "react";
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const [toDoList, setToDoList] = useState(data); //todo
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  return (
    <div className="App">
      <button onClick={() => handleToggle(3)}>Test</button>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
      />{" "}
      {/* 為什麼不用寫那個props啥的 */}
    </div>
  );
}
export default App;
