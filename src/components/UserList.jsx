import React from "react";
import UserItem from "./UserItem";
import "./styling/UserList.css";

function UserList(props) {
  const { users, handleDeleteUser } = props;

  return (
    <div className="user-list">
      <h2>Utilizatori</h2>
      <div className="users-container">
        {users.map((user, index) => {
          return (
            <UserItem
              id={user.id}
              image={user.image}
              name={user.name}
              email={user.email}
              salary={user.salary}
              currency={user.currency}
              isGoldClient={user.isGoldClient}
              key={index}
              handleDeleteUser={handleDeleteUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
