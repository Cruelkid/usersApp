import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const AddUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                <Button buttonType="submit">Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;
