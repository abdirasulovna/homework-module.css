import React from "react";
import styles from "./Input.module.css";
const Input = ({
  id,
  value,
  labelName,
  placeholder,
  inputType,
  onChange,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {labelName}
      </label>
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
