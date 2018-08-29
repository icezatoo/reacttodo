import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import AddTodo from './containers/AddTodo';
import ListTodo from './containers/ListTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// min-height: 100vh;
class App extends PureComponent {
  render() {
    return (
      <Container>
        <h1 className="App-title">Welcome to Todo</h1>
        <AddTodo />
        <ListTodo />
      </Container>
    );
  }
}

export default App;
