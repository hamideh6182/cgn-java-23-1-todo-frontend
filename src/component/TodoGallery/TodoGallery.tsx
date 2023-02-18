import {Todo} from "../../model/Todo";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoGallery.css";

type TodoGalleryProps = {
    todos: Todo[],
    deleteTodo(id: string): void,
    updateTodo(id: string, todo: Todo): void,
}

export default function TodoGallery(props: TodoGalleryProps){

    const openTodos = props.todos.filter((todo) => todo.status === "OPEN").map((todo) => {
        return(
            <TodoCard updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} todo={todo} key={todo.id + " " + todo.status + " " + todo.description} />
        );
    }).reverse();

    const progressTodos = props.todos.filter((todo) => todo.status === "IN_PROGRESS").map((todo) => {
        return(
            <TodoCard updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} todo={todo} key={todo.id + " " + todo.status + " " + todo.description} />
        );
    }).reverse();

    const doneTodos = props.todos.filter((todo) => todo.status === "DONE").map((todo) => {
        return(
            <TodoCard updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} todo={todo} key={todo.id + " " + todo.status + " " + todo.description} />
        );
    }).reverse();

    return(
        <div className={"todo-gallery"}>
            <div className={"todo-gallery-status"}>
                <h2>OPEN</h2>
                {openTodos}
            </div>
            <div className={"todo-gallery-status"}>
                <h2>PROGRESS</h2>
                {progressTodos}
            </div>
            <div className={"todo-gallery-status"}>
                <h2>DONE</h2>
                {doneTodos}
            </div>
        </div>
    );

}