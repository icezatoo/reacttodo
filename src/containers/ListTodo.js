import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import ListHeaders from '../component/list/ListHeaders';
import {  getformat  } from '../common/conmon';
import ListDate from '../component/list/ListDate';

const ListItem = styled.div`
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

class ListTodo extends PureComponent {
  constructor() {
    super();
    this.state = {
      date: getformat('hh:mm a')
    };
  }

  render() {
    const date = this.state.date.toString();
    return (
      <Row>
        <Col xs="12">
          <ListItem>
            <ListHeaders />
            <ListDate datadate={date} />
          </ListItem>
        </Col>
        <Col xs="12">
          <ListItem>
            <ListHeaders />
            <ListDate datadate={date} />
          </ListItem>
        </Col>
      </Row>
    );
  }
}

export default ListTodo;
