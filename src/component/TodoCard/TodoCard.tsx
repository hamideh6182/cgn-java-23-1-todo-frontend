import {Todo} from "../../model/Todo";
import "./TodoCard.css";

type TodoCardProps = {
    todo: Todo,
}

export default function TodoCard(props: TodoCardProps) {
    return (
        <section className={"todo-card"}>
            <h5>{props.todo.id}</h5>
            <p>{props.todo.description}</p>
            <p>Status: {props.todo.status}</p>
        </section>
    );
}