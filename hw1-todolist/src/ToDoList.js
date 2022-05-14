import React from 'react';
import ToDo from './ToDo';

const SetDone = () => {
    this.complete = true
}

// const handleFilter = () => {
//     let filtered = toDoList.filter(task => {
//       return !task.complete;
//     });
//     setToDoList(filtered);
//   }


const ToDoList = ({toDoList, handleTogger, handleFilter}) =>{
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleTogger}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;