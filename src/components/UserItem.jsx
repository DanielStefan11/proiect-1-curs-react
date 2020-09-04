import React from "react";
import "./styling/UserItem.css";
// React icons
import { GrClose } from "react-icons/gr";

function UserItem(props) {
  const {
    id,
    image,
    name,
    email,
    salary,
    currency,
    isGoldClient,
    handleDeleteUser,
  } = props;

  return (
    <div className="user-item">
      <img src={image} alt="user" />
      <h3>{name}</h3>
      <p>
        <span>Adresă email: </span>
        {email}
      </p>
      <p>
        <span>Salariu: </span>
        {salary} {currency}
      </p>
      {isGoldClient ? <h3>Client GOLD</h3> : null}
      <button onClick={() => handleDeleteUser(id)}>
        <GrClose size="1.5rem" color="red" />
      </button>
    </div>
  );
}

export default UserItem;
