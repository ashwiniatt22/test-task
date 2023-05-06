import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from "./component/topbar/TopBar";
import Home from "./component/home/Home";
import "./styles.css";
import UserInfo from "./component/home/UserInfo";
import RegisterUser from "./component/home/RegisterUser";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#000',
    height: '100vh',
  },
}))

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user-information" component={UserInfo} />
          <Route exact path="/register-user" component={RegisterUser} />
        </Switch>
      </Router>
    </div>
  );
}
