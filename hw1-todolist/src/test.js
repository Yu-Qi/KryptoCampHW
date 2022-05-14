import React, {useState} from 'react'; 
import ToDo from './ToDo';



const TEST = ({test}) => {
    const [ userInput, setUserInput ] = useState('');
    const [toDoList, setToDoList] = useState(test);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    
    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }

      const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }
    
      const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }

    return ( <tr>
                <td>
                <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button class="addTaskBtn">Submit</button>
                </form>
                </td>
            {toDoList.map(function(todo){
            return  ( <ToDo todo={todo} handleToggle={handleToggle}/>
            );})}
            <td><button style={{margin: '40px'}} onClick={handleFilter}>清除已完成工作</button></td>
        </tr>
    );
};

export default TEST;