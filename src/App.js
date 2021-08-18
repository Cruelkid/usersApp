import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        const userData = {
            id: Math.random().toString(),
            username: userName,
            userAge: userAge,
        };

        setUsersList((prevUsers) => {
            return [...prevUsers, userData];
        });
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList items={usersList} />
        </Fragment>
    );
}

export default App;
