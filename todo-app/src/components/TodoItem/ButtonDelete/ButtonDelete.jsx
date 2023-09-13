import React from "react";
import styles from "./buttonDelete.module.css";

function ButtonDelete({ ...props }) {
	return (
		<button
			{...props}
			className={styles.btnDel}
		>
			Удалить
		</button>
	);
}

export default ButtonDelete;
