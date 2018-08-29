import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const AddTodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AddTodo extends PureComponent {
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <AddTodoContainer>
            <Form inline>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Add name"
                />
              </FormGroup>
              <Button>Add</Button>
            </Form>
          </AddTodoContainer>
        </Col>
      </Row>
    );
  }
}

export default AddTodo;
