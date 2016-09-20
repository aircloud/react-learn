import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import First from '../mycomponents/First';
import Second from  '../mycomponents/second';
import { Link, IndexLink, browserHistory } from 'react-router'


export default class MyRootApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                {this.props.children}
                <Link to="/first" >first</Link>
                <Link to="/second" >second</Link>
                hello root;
            </div>
        )
    }
}
