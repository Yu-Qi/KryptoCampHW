import React from 'react';
import ToDo from './ToDo';

// const handleFilter = () => {
//     let filtered = toDoList.filter(task => {
//       return !task.complete;
//     });
//     setToDoList(filtered);
//   }


const ToDoList = ({toDoList}) => {
    console.log("[ToDoList]"+toDoList);

    return (
        ( <tr> <td> {toDoList} </td></tr>)
    );
};


// const ToDoList = ({toDoList, handleToggle, handleFilter}) =>{
// const ToDoList = ({toDoList}) => {
//     console.log("[ToDoList]"+123);
//     console.log("[ToDoList]"+toDoList);
//     return ( <tr> <td> 123 </td></tr>);};
        // <tr>
        //     {{toDoList}.map(todo => {
        //         console.log("[Todo]"+{todo})
        //         return (
        //             // <ToDo todo={todo} handleToggle={handleToggle}/>
        //             <td> ok~</td>
        //         )
        //     })}
        //     {/* <button style={{margin: '20px'}} onClick={handleFilter}>清除已完成工作</button> */}
        // </tr>
    // );
// };

export default ToDoList;