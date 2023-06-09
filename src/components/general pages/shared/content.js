import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from '../homepage/homepage';
import AllCauses from '../all_causes';
import Login from '../login';
import About from '../about/about';
import CauseDetails from '../cause_details';
// import HowItWorks from '../how_it_works';

const Content = () => (
    <Switch>
        <Route exact path = "/" component = {Homepage} />
        <Route path = "/causes" component = {AllCauses} />
        <Route path = "/login" component = {Login} />
        <Route path ='/about' component = {About} />
        <Route path ='/cause_details' component = {CauseDetails}/>
    </Switch>
)
    

export default Content;