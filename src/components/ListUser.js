import React from "react";
import { Spinner } from "reactstrap";
import User from "./User";

function ListUser({ users, loadUsers }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadUsers ? (
        <Spinner color="success" />
      ) : (
        users.map((el) => <User user={el} />)
      )}
    </div>
  );
}

export default ListUser;
