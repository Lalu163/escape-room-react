import React, {useState} from 'react';
import ToDoForm from "./ToDoForm";

function ToDoList() {
    const [toDos, setToSos] = useState([]);
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <ToDoForm/>
        </div>
    )
}

export default ToDoList