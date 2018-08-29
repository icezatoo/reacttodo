import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AddTodolist } from '../common/actions/todo';
const AddTodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const { dispatch } = this.props;
    dispatch(AddTodolist(value));
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    const disabledbtn = value == null || value == '';
    return (
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <AddTodoContainer>
            <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={value}
                  onChange={this.handleChange}
                  placeholder="Add name"
                />
              </FormGroup>
              <Button disabled={disabledbtn}>Add</Button>
            </Form>
          </AddTodoContainer>
        </Col>
      </Row>
    );
  }
}

export default connect()(AddTodo);
