import React from 'react';
import MainPage from "./mainpage";
import AboutMe from "./aboutme";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contactpage";

import {Switch, Route} from 'react-router-dom';


const Routes = () => (
    <Switch>
        <Route exact path = "/" component = {MainPage} />
        <Route path = "/aboutme" component = {AboutMe} />
        <Route path = "/portfolio" component = {Portfolio} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/contactpage" component = {Contact} />
    </Switch>
)

export default Routes