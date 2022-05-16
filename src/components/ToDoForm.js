import React, {useState} from 'react';

function ToDoForm(props){
    const [input, setInput] = useState('');
    return(
        <form className='toDo-form'>
            <input type="text" placeholder="Add a to do" value={input} name="text" className="toDo-input"/>
                <button className="toDo-button">Add something to do</button>
        </form>
    )
}

export default ToDoForm