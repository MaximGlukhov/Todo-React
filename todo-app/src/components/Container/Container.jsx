import React, {useState} from "react";
import styles from "./container.module.css";
import Form from "../Form/Form";
import {TodoList} from "../TodoList/TodoList";
import {getStorageValue} from "../../utils/getStorageValue";
import {ListContext} from "../../context/ListContext";

function Container() {
    let todos = getStorageValue("list", []);

    const [items, setItems] = useState(todos);

    const createItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const addFinish = (item) => {
        setItems((prev) =>
            prev.map((i) =>
                i.id === item.id && i.value === false ? {...i, value: true} : i.id === item.id && i.value === true ? {...i, value: false} : i
            )
        );
    };

    const removeItem = (item) => {
        setItems((prev) => prev.filter((i) => i.id !== item.id));
    };

    return (
        <div className={styles.container}>
            <Form create={createItem}></Form>
            <ListContext.Provider value={items}>
                <TodoList
                    finish={addFinish}
                    remove={removeItem}></TodoList>
            </ListContext.Provider>
        </div>
    );
}

export default Container;
