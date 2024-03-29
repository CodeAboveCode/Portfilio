import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Contact from "./Contact";
import Projcets from './Projects';
import Experience from './Experience';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Projects" component={Projcets} />
      <Route path="/Aboutme" component={Aboutme} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Help" component={Experience} />
    </Switch>
  );
};

export default Main;
