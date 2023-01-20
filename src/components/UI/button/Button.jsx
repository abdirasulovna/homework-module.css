import React from "react";
import styles from  "./Button.module.css";
const Button = ({ onClick, disabled, title }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
