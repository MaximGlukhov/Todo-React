import React from "react";
import styles from "./todoItem.module.css";
import ButtonAdd from "./ButtonAdd/ButtonAdd";
import ButtonDelete from "./ButtonDelete/ButtonDelete";

const TodoItem = ({body, number, value, ...props}) => {
    return (
        <li
            value={value}
            className={value ? `${styles.itemActive} ${styles.item}` : `${styles.item}`}>
            <span>
                {number}. {body}
            </span>

            <div className={styles.btnsWrap}>
                <ButtonAdd onClick={() => props.finish(props.item)}></ButtonAdd>
                <ButtonDelete onClick={() => props.remove(props.item)}></ButtonDelete>
            </div>
        </li>
    );
};

export default TodoItem;
