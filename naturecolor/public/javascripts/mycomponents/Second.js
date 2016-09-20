/**
 * Created by hh on 19/9/2016.
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Second extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render(){
        return (
            // <div>Hello World</div>
            <div>{this.props.second},hello second</div>
            // <div>Hello World</div>
        );
    }
}

