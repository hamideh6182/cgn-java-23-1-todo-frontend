import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import axios from "axios";
import TodoGallery from "./component/TodoGallery/TodoGallery";
import AddTodo from "./component/AddTodo/AddTodo";

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    function fetchTodos() {
        axios.get("/api/todo")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error("Something went wrong :(" + error);
            });
    }

    function addToDo(todoToAdd: Todo) {
        axios.post("/api/todo", todoToAdd)
            .then(() => {
                fetchTodos();
            })
            .catch((error) => {
                console.error("Something went wrong :(" + error)
            });
    }

    function deleteTodo(id: string) {
        axios.delete("/api/todo/" + id)
            .then(() => {
                fetchTodos();
            })
            .catch((error) => {
                console.error("Something went wrong :(" + error);
            });
    }

    function updateTodo(id: string, todo: Todo) {
        axios.put("/api/todo/" + id + "/update", todo)
            .then(() => {
                fetchTodos();
            })
            .catch((error) => {
                console.error("Something went wrong :(" + error);
            })
    }

    return (
        <div className="App">
            <AddTodo addTodo={addToDo}/>
            <TodoGallery updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos}/>
        </div>
    );
}

export default App;
