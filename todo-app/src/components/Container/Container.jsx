import React, {useState} from "react";
import styles from "./container.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import {useLocalStorage} from "../../hooks/useLocalStorage";

function Container() {
    function getTodosFromLocalStorage() {
        let todosFromLocalStorage = localStorage.getItem("list");
        return todosFromLocalStorage && JSON.parse(todosFromLocalStorage);
    }

    let todos = getTodosFromLocalStorage();

    const [items, setItems] = useState(todos);

    useLocalStorage("list", items);

    const createItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const addFinish = (item) => {
        setItems(
            items.map((i) =>
                i.id === item.id && i.value === false ? {...i, value: true} : i.id === item.id && i.value === true ? {...i, value: false} : i
            )
        );
    };

    const removeItem = (item) => {
        setItems(items.filter((i) => i.id !== item.id));
    };

    return (
        <div className={styles.container}>
            <Form create={createItem}></Form>
            <TodoList
                finish={addFinish}
                remove={removeItem}
                list={items}></TodoList>
        </div>
    );
}

export default Container;
