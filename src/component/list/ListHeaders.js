import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../common/ButtonIcon';

const ListHeader = styled.div`
  align-items: center;
`;
const ListText = styled.span`
  margin-left: 10px;
`;

const ListHeaders = ({ titleHeader }) => (
  <ListHeader>
    <input type="checkbox" />
    <ListText>Cras justo odio</ListText>
    <ButtonIcon float="right" bgcolor="#fd6c6c">
      <i className="fas fa-trash-alt" />
    </ButtonIcon>
    <ButtonIcon float="right"  bgcolor="#5db55d">
      <i className="fas fa-edit" />
    </ButtonIcon>
  </ListHeader>
);

export default ListHeaders;
