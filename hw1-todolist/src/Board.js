import react, {userState} from 'react';
import ToDoList2 from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDo from './ToDo';
import TEST from './test';



const Board = ({addBoard, getBoard, setBoard}) => {
    const tableHeader = getBoard.map(function(b){
        return <th> {b.name}</th>
        });
    const tableContext = getBoard.map(function(b){
            return  (<TEST test={b.data}/>)
            });
    return (
        <table border="1">
            <thead>
                    {tableHeader}
            </thead>
            <tbody>
                {tableContext}
            </tbody>
        </table>
    )
}
export default Board;


