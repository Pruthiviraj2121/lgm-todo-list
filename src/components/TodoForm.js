import { useState } from "react";
import React from 'react';

export default function TodoForm(props) {
    //state 
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = (e)=> {
        e.preventDefault(); //This will prevent to reload the page after submit the button
        props.addTask({
            id: Math.floor(Math.random()*1000000),
            text: input,
            isComplete: false 
        })
        setInput('')
    }
    return (<form className="todo-form">
        <input type="text" className="todo-input" placeholder="Add a todo" value={input} name="text" onChange={handleChange}></input>
        <button type="submit" className="todo-btn" onClick={handleSubmit}>ADD TODO</button>
    </form>
    );
}