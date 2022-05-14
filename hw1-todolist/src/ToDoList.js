import React from 'react';
import ToDo from './ToDo';

// const handleFilter = () => {
//     let filtered = toDoList.filter(task => {
//       return !task.complete;
//     });
//     setToDoList(filtered);
//   }


const ToDoList = ({toDoList, handleToggle, handleFilter}) =>{
    return (
        <div>
            {/* <form> */}
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>清除已完成工作</button>
            {/* </form> */}
        </div>
    );
};

export default ToDoList;