import React from 'react';
import { render } from 'react-dom'
import Home from 'home.jsx'
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom'
import FloatingActionButton from 'FloatingActionButton.jsx';

render(
        <HashRouter history={hashHistory}>
        <Route path="/" component = {FloatingActionButton}>
        </Route>
        </HashRouter>
, document.getElementById('app'));
