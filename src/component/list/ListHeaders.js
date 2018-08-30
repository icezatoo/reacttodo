// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../common/ButtonIcon';

const ListHeader = styled.div`
  align-items: center;
`;
const ListText = styled.span`
  margin-left: 10px;
`;

const ListHeaders = ({
  name,
  onClickToggle,
  onClickDelete,
  onclickEdit,
  completed
}) => (
  <ListHeader>
    <input type="checkbox" onChange={onClickToggle} checked={completed} />
    <ListText>{name}</ListText>
    <ButtonIcon float="right" onClick={onClickDelete} bgcolor="#fd6c6c">
      <i className="fas fa-trash-alt" />
    </ButtonIcon>
    <ButtonIcon float="right" onClick={onclickEdit} bgcolor="#5db55d">
      <i className="fas fa-edit" />
    </ButtonIcon>
  </ListHeader>
);

export default ListHeaders;
