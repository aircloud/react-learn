import  React from 'react';
import  ReactDom from  'react-dom';
import  MyRootApp from './container/rootapp';
import First from './mycomponents/First';
import Second from  './mycomponents/second';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var app = document.getElementById("app");

console.log(ReactDom);

ReactDom.render((
    <Router>
        <Route path="/" component={MyRootApp}>
            <Route path="/first" component={First} first="hello,first"/>
            <Route path="/second" component={Second} second="hello second"/>
        </Route>
    </Router>
),app);