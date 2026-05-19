import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";   // NEW IMPORT

export default function TodoList () {
       const navigate = useNavigate();   // NEW LINE

    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTaskValue = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTaskValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            }) 
        );
    };

    let UpperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                } else {
                    return todo;
                }
                
            }) 
        );
    };

    return(
        <div>
             {/* NEW BUTTON FOR NEW PAGE */}
             <button onClick={() => navigate("/add")}>
                 click me 💕
             </button>
            <h4>ToDo App</h4>
            <input className="ty" placeholder="Add new task" value={newTodo} onChange={updateTaskValue} ></input>
             
            &nbsp; &nbsp; &nbsp;
            <br></br> <br></br>
            <button onClick={addNewTaskValue}>Add Task</button>
            <br></br> <br></br>
            <hr></hr>
            <div >
                {
                    todos.map((todo) => (
                        <div className="card" key={todo.id}>
                           <span> {todo.task}</span>
                            &nbsp; &nbsp;
                           <button onClick={() => deleteTask(todo.id)}>Delete</button>
                           &nbsp;&nbsp; &nbsp;
                           <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>

                           </div>

                    ))
                }
            </div>
            <br></br>
            <button onClick={upperCaseAll}>upperCaseAll</button>
                
       </div>
     )

 }

