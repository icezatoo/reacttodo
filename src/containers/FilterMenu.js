// @ts-nocheck
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../common/actions/filtertodo';
import MenuDropdown from '../component/filtermenu/MenuDropdown';
import BadgeShowCountList from '../component/filtermenu/BadgeShowCountList';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`;

class FilterMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState(prevState => {
      return { dropdownOpen: !prevState.dropdownOpen };
    });
  };

  handleClickMenu = valuefilter => {
    const { setVisibilityFilter } = this.props;
    setVisibilityFilter(valuefilter);
  };

  render() {
    const { dropdownOpen } = this.state;
    const { filterstatus, todos } = this.props;
    const total = getlengthTodos(todos, filterstatus);
    return (
      <Row>
        <Col xs="12">
          <FilterContainer>
            <h3>Results</h3>
            <div>
              <BadgeShowCountList totaltodo={total} />
              <MenuDropdown
                dropdownOpen={dropdownOpen}
                handleClickMenu={this.handleClickMenu}
                filter={filterstatus}
                toggle={this.toggle}
              />
            </div>
          </FilterContainer>
        </Col>
      </Row>
    );
  }
}

const getlengthTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.length;
    case 'SHOW_COMPLETED':
      return todos.filter(val => val.completed).length;
    case 'SHOW_ACTIVE':
      return todos.filter(val => !val.completed).length;
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: state.todolist.todo,
  filterstatus: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenu);
