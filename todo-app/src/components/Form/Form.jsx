import React, {useState} from "react";
import styles from "./form.module.css";
import Input from "./Input/Input";
import Button from "./Button/Button";

function Form({create}) {
    const [item, setItem] = useState({body: ""});

    const addNewItem = e => {
        e.preventDefault();
        const newItem = {
            ...item,
            id: Date.now(),
        };
        create(newItem);
        setItem({body: ""});
    };

    return (
        <form className={styles.form}>
            <Input value={item.body} onChange={event => setItem({...item, body: event.target.value})} type='text' placeholder='Название дела' />
            <Button onClick={addNewItem}>Создать</Button>
        </form>
    );
}

export default Form;
