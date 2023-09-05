import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function Todolist() {


    //State Array which hold all TODOs
    const [todos, setTodos] = useState([]);

    //function to add todo to list
    const addTask = task => {
        if (!task.text) {
            return 
        }

        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    //function to remove todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks);
    }

    //function to show task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks);
    }
  return (
    <div>
      <TodoForm addTask={addTask}></TodoForm>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
  )
}
