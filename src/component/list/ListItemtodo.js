import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import ListHeaders from './ListHeaders';
import ListDate from './ListDate';

const ListItemContainer = styled.div`
  display: flex;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 3px hsla(0, 0%, 4%, 0.1),
    0 0 0 1px hsla(0, 0%, 4%, 0.1);
  box-shadow: 0 2px 3px hsla(0, 0%, 4%, 0.1), 0 0 0 1px hsla(0, 0%, 4%, 0.1);
  color: #4a4a4a;
  padding: 1.25rem;
  flex-direction: column;
`;

class ListItemTodo extends PureComponent {
  renderList = todos => {
    const { ToggleTodolist, RemoveTodolist, ShowDialog } = this.props;
    if (todos.length !== 0) {
      return todos.map(val => (
        <Col xs="12" key={val.id}>
          <ListItemContainer>
            <ListHeaders
              {...val}
              onClickDelete={() => RemoveTodolist(val.id)}
              onClickToggle={() => ToggleTodolist(val.id)}
              onclickEdit={() => ShowDialog(val)}
            />
            <ListDate {...val} />
          </ListItemContainer>
        </Col>
      ));
    } else {
      return (
        <Col xs="12">
          <ListItemContainer>
            <h2 style={{ textAlign: 'center' }}>No data </h2>
          </ListItemContainer>
        </Col>
      );
    }
  };

  render() {
    const { todos } = this.props;
    return <Row> {todos && this.renderList(todos)}</Row>;
  }
}

export default ListItemTodo;
