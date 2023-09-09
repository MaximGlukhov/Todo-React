import React from "react";
import styles from "./input.module.css";

function Input(props) {
    return <input {...props} className={styles.input} type='text' />;
}

export default Input;
