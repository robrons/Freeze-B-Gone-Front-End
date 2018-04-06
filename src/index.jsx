import React from 'react';
import { render } from 'react-dom'
import SignInScreen from 'login.jsx'
import Home from 'home.jsx'
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom'
import { Provider } from 'react-redux';

render(

      <SignInScreen/>
, document.getElementById('app'));
