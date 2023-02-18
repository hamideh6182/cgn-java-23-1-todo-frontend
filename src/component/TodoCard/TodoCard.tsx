import {Todo} from "../../model/Todo";
import "./TodoCard.css";
import {ChangeEvent} from "react";

type TodoCardProps = {
    todo: Todo,
    deleteTodo(id: string): void,
    updateTodo(id: string, todo: Todo): void,
}

export default function TodoCard(props: TodoCardProps) {

    function handleDeleteClick() {
        props.deleteTodo(props.todo.id);
    }

    function handleUpdateStatus(event: ChangeEvent<HTMLSelectElement>) {
        props.updateTodo(props.todo.id, {
            id: props.todo.id,
            description: props.todo.description,
            status: event.target.value as "OPEN" | "IN_PROGRESS" | "DONE",
        });
    }

    return (
        <section className={"todo-card"}>
            <h5>{props.todo.id}</h5>
            <p>{props.todo.description}</p>
            <select onChange={handleUpdateStatus}>
                <option selected={props.todo.status === "OPEN"} value={"OPEN"}>open</option>
                <option selected={props.todo.status === "IN_PROGRESS"} value={"IN_PROGRESS"}>in progress</option>
                <option selected={props.todo.status === "DONE"} value={"DONE"}>done</option>
            </select>
            <button onClick={handleDeleteClick}>DELETE</button>
        </section>
    );
}