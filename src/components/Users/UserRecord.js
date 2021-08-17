import React from "react";
import styles from "../UI/Card.module.css";

const UserRecord = (props) => {
    return (
            <li className={styles.userItem} key={props.id}>
                <b>Username: </b>
                {props.username} ({props.userAge} y.o.)
            </li>
    );
};

export default UserRecord;
