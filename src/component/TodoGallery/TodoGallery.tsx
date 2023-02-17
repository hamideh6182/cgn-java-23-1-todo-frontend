import {Todo} from "../../model/Todo";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoGallery.css";

type TodoGalleryProps = {
    todos: Todo[],
    filter: "OPEN" | "IN_PROGRESS" | "DONE",
}

export default function TodoGallery(props: TodoGalleryProps){

    const todoCard = props.todos.filter((todo) => todo.status === props.filter).map((todo) => {
        return(
            <TodoCard todo={todo} key={todo.id + " " + todo.status + " " + todo.description} />
        );
    });

    return(
        <div className={"todo-gallery"}>
            {todoCard}
        </div>
    );

}