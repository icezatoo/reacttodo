import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { getformat } from '../../common/conmon';
class ModalForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.datatodo
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value }, () => {
      this.onupdateState();
    });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value }, () => {
      this.onupdateState();
    });
  };

  onupdateState = () => {
    const { updateDataform } = this.props;
    updateDataform(this.state);
  };

  render() {
    const { id, datenow, name, description } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="myid">id</Label>
          <Input
            type="text"
            name="id"
            value={id}
            id="myid"
            placeholder="My Id"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="datetext">Date</Label>
          <Input
            type="text"
            name="date"
            value={getformat('DD/MM/YYYY', datenow)}
            id="datetext"
            placeholder="Date Time"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChangeName}
            value={name}
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            value={description}
            onChange={this.handleChangeDescription}
            name="text"
            id="description"
          />
        </FormGroup>
      </Form>
    );
  }
}

export default ModalForm;
