import React, {useState} from "react";
import styles from "./form.module.css";
import Input from "./Input/Input";
import Button from "./Button/Button";
import {getStorageValue} from "../../utils/getStorageValue";

function Form({create}) {
    let inputData = getStorageValue("input", {body: ""});
    const [item, setItem] = useState(inputData);

    const addNewItem = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            ...item,
            value: false,
        };
        create(newItem);
        setItem({body: ""});
        localStorage.setItem("input", JSON.stringify({body: ""}));
    };

    function inputValue(event) {
        setItem({...item, body: event.target.value});
        localStorage.setItem("input", JSON.stringify({body: event.target.value}));
    }

    return (
        <form className={styles.form}>
            <Input
                value={item.body}
                onChange={inputValue}
                type="text"
                placeholder="Название дела"
            />
            <Button onClick={addNewItem}>Создать</Button>
        </form>
    );
}

export default Form;
