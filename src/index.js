import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './Components/Login';
import Admin from './Components/Admin';
ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path = "/" component = {App} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/admin" component = {Admin} />
        </div>
   </BrowserRouter>
   ), document.getElementById('root'));


serviceWorker.unregister();
