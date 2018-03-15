import React from 'react';
import { render } from 'react-dom'
import SignInScreen from 'login.jsx'
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom'

render(
        <HashRouter history={hashHistory}>
        <Route path="/" component = {SignInScreen}>
        </Route>
        </HashRouter>
, document.getElementById('app'));
