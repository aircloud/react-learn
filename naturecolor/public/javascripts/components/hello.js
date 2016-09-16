import React, { Component } from 'react';
import { render } from 'react-dom';

export default class HelloWorldComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render(){
        return (
            <div>Hello World</div>
    );
    }
}


