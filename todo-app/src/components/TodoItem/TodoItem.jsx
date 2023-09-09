import React from "react";
import styles from "./todoItem.module.css";
import ButtonAdd from "./ButtonAdd/ButtonAdd";
import ButtonDelete from "./ButtonDelete/ButtonDelete";

const TodoItem = props => {
    return (
        <li className={styles.item}>
            <span>
                {props.number}. {props.body}
            </span>

            <div className={styles.btnsWrap}>
                <ButtonAdd></ButtonAdd>
                <ButtonDelete onClick={() => props.remove(props.item)}></ButtonDelete>
            </div>
        </li>
    );
};

export default TodoItem;
