/**
 * Created by hh on 19/9/2016.
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

export default class First extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render(){
        return (
            // <div>Hello World</div>
            <div>{this.props.first},hello first</div>
            // <div>Hello World</div>
        );
    }
}

