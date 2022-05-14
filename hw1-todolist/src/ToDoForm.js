import React, {useState} from 'react';

const ToDoForm = ({ addTask}) => {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="輸入任務~~~"/>
            <button>新增代辦事項</button>
        </form>
    
    );
};

export default ToDoForm;