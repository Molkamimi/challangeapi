import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Error from "./components/Pages/Error";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/Pages/AboutUs";
import Axios from "axios";
import ListUser from "./components/ListUser";
import UserDetails from "./components/Pages/UserDetails";
import Comments from "./components/Pages/Comments";

function App() {
  const [users, setUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);
  const getUser = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoadUsers(false);
      })
      .catch((err) => console.err(err));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home users={users} loadUsers={loadUsers} />}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/posts/:id" component={Comments} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
