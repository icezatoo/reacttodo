import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const MenuDropdown = ({ dropdownOpen, toggle, filter, handleClickMenu }) => (
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      <i className="fas fa-filter" />
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem
        onClick={() => handleClickMenu('SHOW_ALL')}
        active={filter === 'SHOW_ALL'}
      >
        ALL
      </DropdownItem>
      <DropdownItem
        onClick={() => handleClickMenu('SHOW_ACTIVE')}
        active={filter === 'SHOW_ACTIVE'}
      >
        ACTIVE
      </DropdownItem>
      <DropdownItem
        onClick={() => handleClickMenu('SHOW_COMPLETED')}
        active={filter === 'SHOW_COMPLETED'}
      >
        COMPLETED
      </DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
);
export default MenuDropdown;
