import React, {useContext} from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todoList.module.css";
import {ListContext} from "../../context/ListContext";

export function TodoList({finish, remove}) {
    const list = useContext(ListContext);

    localStorage.setItem("list", JSON.stringify(list));
    return (
        <ul className={styles.listTodo}>
            {list.map((item, index) => (
                <TodoItem
                    remove={remove}
                    finish={finish}
                    key={item.id}
                    number={index + 1}
                    body={item.body}
                    value={item.value}
                    item={item}></TodoItem>
            ))}
        </ul>
    );
}
