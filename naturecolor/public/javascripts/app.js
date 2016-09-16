import  HelloWorldComponent from './components/hello';
import  React from 'react';
import  ReactDom from  'react-dom';

var app = document.getElementById("app");

ReactDom.render(<HelloWorldComponent />,app);