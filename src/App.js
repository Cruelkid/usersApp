import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";
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
        <Wrapper>
            <AddUser onAddUser={addUserHandler} />
            <UsersList items={usersList} />
        </Wrapper>
    );
}

export default App;
