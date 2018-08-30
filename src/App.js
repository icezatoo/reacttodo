import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import AddTodo from './containers/AddTodo';
import ControllerTodo from './containers/ControllerTodo';
import FilterMenu from './containers/FilterMenu';
import ModalTodo from './containers/ModalTodo';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AddContainer = styled.div`
  min-height: 100vh;
  padding: 60px;
`;
class App extends PureComponent {
  render() {
    return (
      <AddContainer>
        <Container>
          <h1 className="App-title">Welcome to Todo </h1>
          <AddTodo />
          <FilterMenu />
          <ControllerTodo />
          <ModalTodo />
        </Container>
      </AddContainer>
    );
  }
}

export default App;
