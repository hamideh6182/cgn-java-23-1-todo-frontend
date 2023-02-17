import TodoGallery from "../TodoGallery/TodoGallery";
import {useEffect, useState} from "react";
import {Todo} from "../../model/Todo";
import axios from "axios";
import AddTodo from "../AddTodo/AddTodo";
import "./TodoApp.css";

export default function TodoApp() {

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

    return (
        <div>
            <AddTodo addTodo={addToDo} />
            <div className={"todo-app"}>
                <div className={"todo-gallery-status"}>
                    <h2>OPEN</h2>
                    <TodoGallery todos={todos} filter={"OPEN"}/>
                </div>
                <div className={"todo-gallery-status"}>
                    <h2>IN PROGRESS</h2>
                    <TodoGallery todos={todos} filter={"IN_PROGRESS"}/>
                </div>
                <div className={"todo-gallery-status"}>
                    <h2>DONE</h2>
                    <TodoGallery todos={todos} filter={"DONE"}/>
                </div>
            </div>
        </div>
    );

}