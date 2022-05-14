import React from 'react'; 


const ToDoList2 = ({abc}) => {
    console.log("[todolist2]"+abc);

    return (
        ( <tr> <td> {abc} </td></tr>)
    );
};

// onClick={SetDone(todo)}


export default ToDoList2;