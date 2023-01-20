import { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import styles from "./UserForm.module.css";

export const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const enabled = name.length > 0 && age.length > 0;
  const saveHandler = (event) => {
    event.preventDefault();
    const date = {
      name,
      age,
    };
    props.onNewUsersAdd(date);
    setName("");
    setAge("");
  };
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form className={styles.form}>
      <Input
        id="name"
        labelName="Username:"
        inputType="text"
        placeholder="Your Name"
        value={name}
        onChange={nameInputChangeHandler}
      />

      <Input
        labelName="Age (Years):"
        inputType="number"
        id="age"
        value={age}
        onChange={ageInputChangeHandler}
      />
      <div className="button">
        <Button
          title="ADD USER"
          value={name}
          disabled={!enabled}
          onClick={saveHandler}
        />
      </div>
    </form>
  );
};
