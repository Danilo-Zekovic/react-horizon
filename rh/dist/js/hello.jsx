import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div className="container hello">
        <h1>Hello World!!! It is me again.</h1>
        <button className="btn btn-primary">Click me</button>
      </div>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Hello/>
    )
  }
}
