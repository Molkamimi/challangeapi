import React from "react";
import ListUser from "../ListUser";

function Home(users, loadUsers) {
  return (
    <div>
      <ListUser users={users} loadUsers={loadUsers} />
    </div>
  );
}

export default Home;
