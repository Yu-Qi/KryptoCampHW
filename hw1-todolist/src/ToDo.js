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
        <div className={todo.complete ? "strike" : ""}>
            <button style={{margin: '20px'}} onClick={() => handleToggle(3)}>Done</button>
            {todo.task +"~~~"+ todo.complete}
        </div>
    );
};

// onClick={SetDone(todo)}


export default ToDo;