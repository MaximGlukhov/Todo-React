import React, {useState} from "react";
import styles from "./container.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

function Container() {
    const [items, setItems] = useState([
        {id: 1, body: "Купить колбасу"},
        {id: 2, body: "Купить хлеб"},
        {id: 3, body: "Купить масло"},
    ]);

    const createItem = newItem => {
        setItems([...items, newItem]);
    };

    const deleteItem = item => {
        setItems(items.filter(i => i.id !== item.id));
    };

    return (
        <div className={styles.container}>
            <Form create={createItem}></Form>
            <TodoList remove={deleteItem} list={items}></TodoList>
        </div>
    );
}

export default Container;
