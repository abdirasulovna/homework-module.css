import React from "react";
import styles from "./UserItem.module.css";


export const UserItem = ({ name, year }) => {
  const old = "years old";
  return (
    <div className={styles.elements}>
      <div className={styles.item}>
        <p className={styles.name}>{name}</p>
        <p className={styles.age}> {`( ${year}  ${old} )`}</p>
      </div>
    </div>
  );
};


