import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import openSocket from 'socket.io-client';
const socket = openSocket('/');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setUserName() {}
  render() {
    return <div />;
  }
}

export default App;
