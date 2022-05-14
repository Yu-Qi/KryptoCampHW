import React from 'react'; 


// const SetDone(this){
//     this.complete = true
// }
// const SetDone = (todo) => {
//     console.log('this is:', todo);
// }

// class Button extends React.Component{
//     ToggleButton() {
//         this.setState(
//             {textflag : !this.state.textflag}
//         );
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={() => this.ToggleButton()}>
//                   { this.state.textflag === false ? "Hide":"Show" }
//                 </button>
//                 {!this.state.textflag && this.props.text}
//             </div>
//         )
//     }
// }
const ToDo = ({todo, handleToggle}) => {
    return (
        <td >
            <button style={{margin: '10px', width: '50px', height: '25px'}} onClick={() => handleToggle(todo.id)}> { todo.complete ? "NotYet":"Done"}</button>
            {todo.complete? "🚀 ":""}
            <input className={todo.complete ? "strike" : ""} defaultValue={todo.task}>
            </input>
        </td>

    );
};

// onClick={SetDone(todo)}


export default ToDo;