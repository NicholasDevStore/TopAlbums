import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import TopAlbums from "./TopAlbums";
import TopSongs from "./TopSongs";

const App = () => {
  const navLinkActiveStyle = { fontWeight: "bold", color: "#109CF1" };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/albums" activeStyle={navLinkActiveStyle}>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink to="/songs" activeStyle={navLinkActiveStyle}>
                Songs
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/albums">
            <TopAlbums />
          </Route>
          <Route path="/songs">
            <TopSongs />
          </Route>
          <Route path="/">
            <TopAlbums />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
