import React from "react";

const AddUser = (props) => {
    const AddUserHandler = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Add user</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"></input>
            <button type='submit'>Add user</button>
        </form>
    );
};

export default AddUser;
