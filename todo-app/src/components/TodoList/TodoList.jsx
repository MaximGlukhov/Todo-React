import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todoList.module.css";

function TodoList({list, remove}) {
    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <TodoItem remove={remove} number={index + 1} key={item.id} body={item.body}></TodoItem>
            ))}
        </ul>
    );
}

export default TodoList;
