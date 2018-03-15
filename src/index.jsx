import React from 'react';
import { render } from 'react-dom'
import Home from 'home.jsx'
import {Router, Route, IndexRoute, hashHistory} from "react-router"

render(
        <Router history={hashHistory}>
        <Route path="/" component={Home}>

        </Route>
        </Router>
, app);
