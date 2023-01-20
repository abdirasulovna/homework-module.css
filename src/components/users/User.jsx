import React from "react";
import { UserItem } from "../user-item/UserItem";
import styles from "./User.module.css";

export const User = ({ expenses }) => {
  return (
    <ul className={styles.userList}>
      {expenses.map((elem, index) => {
        return <UserItem name={elem.name} year={elem.age} key={index} />;
      })}
    </ul>
  );
};


