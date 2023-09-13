import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todoList.module.css";

function TodoList({list, remove, finish}) {
    localStorage.setItem("list", JSON.stringify(list));
    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <TodoItem
                    finish={finish}
                    remove={remove}
                    key={item.id}
                    number={index + 1}
                    body={item.body}
                    value={item.value}
                    item={item}></TodoItem>
            ))}
        </ul>
    );
}

export default TodoList;
