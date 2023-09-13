import React from "react";
import styles from "./buttonAdd.module.css";

function ButtonAdd({ ...props }) {
    return (
        <button {...props} className={styles.btnAdd}>
            Сделано
        </button>
    );
}

export default ButtonAdd;
