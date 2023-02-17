import {ChangeEvent, useState} from "react";
import {Todo} from "../../model/Todo";

type AddTodoProps = {
    addTodo: (toDoToAdd: Todo) => void,
}

export default function AddTodo(props: AddTodoProps){

    const [todoToAdd, setToDoToAdd] = useState<Todo>({
        id: "",
        description: "",
        status: "OPEN",
    });

    function handleChangeDescription(event: ChangeEvent<HTMLInputElement>){
        setToDoToAdd({
            ...todoToAdd,
            description: event.target.value,
        });
    }

    function handleClickAddToDo(){
        props.addTodo(todoToAdd);
        setToDoToAdd({
            ...todoToAdd,
            description: "",
        })
    }

    return(
        <div>
            Description: <input value={todoToAdd.description} onChange={handleChangeDescription} />
            <button onClick={handleClickAddToDo}>Add ToDo</button>
        </div>
    );
}