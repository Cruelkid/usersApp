import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorObject, setErrorObject] = useState();

    const AddUserHandler = (e) => {
        e.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setErrorObject({
                title: "Invalid input",
                message:
                    "Invalid username and/or age has been entered! Please set a valid username and/or age!",
            });

            return;
        }

        if (+enteredAge < 1) {
            setErrorObject({
                title: "Invalid age",
                message: "Age cannot be less than 1!",
            });

            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setErrorObject(null);
    };

    return (
        <Wrapper>
            {errorObject && (
                <ErrorModal
                    title={errorObject.title}
                    message={errorObject.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    ></input>
                    <Button buttonType="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
