import React from 'react';
import styled from 'styled-components';

const ListText = styled.span`
  margin-left: 10px;
  color: #c1c1c1;
  font-size: 14px;
`;

const ListDateStyle = styled.span`
  margin-left: 10px;
`;

const ListDate = ({ datadate }) => (
  <ListDateStyle>
    <ListText>{datadate}</ListText>
  </ListDateStyle>
);

export default ListDate;
