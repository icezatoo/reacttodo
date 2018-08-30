// @ts-nocheck
import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { CloseDialog, UpdatadataDialog } from '../common/actions/todo';
import ModalForm from '../component/modalform/Modalform';
class ModalTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      datasave: null
    };
  }

  updateDataform = value => {
    this.setState({
      datasave: { ...value }
    });
  };

  onCloseDialog = () => {
    const { CloseDialog } = this.props;
    this.setState(
      {
        datasave: null
      },
      () => CloseDialog()
    );
  };

  onSaveData = () => {
    const { datasave } = this.state;
    const { UpdatadataDialog } = this.props;
    this.setState({ datasave: null }, () => UpdatadataDialog(datasave));
  };

  render() {
    const { showdialog, datatodo } = this.props;
    const statussave = this.state.datasave ? false : true;
    return (
      <Modal isOpen={showdialog} toggle={this.onCloseDialog}>
        <ModalHeader toggle={this.onCloseDialog}>You Detail </ModalHeader>
        <ModalBody>
          {datatodo ? (
            <ModalForm
              datatodo={datatodo}
              updateDataform={this.updateDataform}
            />
          ) : (
            <p>No Data</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            disabled={statussave}
            onClick={this.onSaveData}
          >
            Save
          </Button>
          <Button color="secondary" onClick={this.onCloseDialog}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  showdialog: state.todolist.showdialog,
  datatodo: state.todolist.datatodo
});

const mapDispatchToProps = dispatch => ({
  CloseDialog: () => dispatch(CloseDialog()),
  UpdatadataDialog: value => dispatch(UpdatadataDialog(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTodo);
