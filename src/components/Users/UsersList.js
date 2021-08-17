import React from "react";
import Card from "../UI/Card";
import UserRecord from "./UserRecord";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <Card>
                <h2>No users found.</h2>
            </Card>
        );
    }

    return (
        <Card className={styles.users}>
            <ul className={styles.usersList}>
                {props.items.map((el) => (
                    <UserRecord
                        id={el.id}
                        username={el.username}
                        userAge={el.userAge}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
