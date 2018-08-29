import React from 'react';
import styled from 'styled-components';

const Buttoncontent = styled.a`
  float: ${props => props.float};
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: 2px solid #000;
  border-color: #fff;
  color: #fff;
  box-sizing: border-box;
  background: ${props => props.bgcolor};
  border-radius: 50%;
  width: 46px;
  height: 46px;
  &:hover {
    color: #141313;
    background-color: #e0e0e0;
    border-color: rgba(100%, 100%, 100%, 0.2);
  }
`;

const ButtonIcon = ({
  children,
  onClick,
  float,
  bgcolor = 'rgba(0, 0, 0, 0.2)'
}) => (
  <Buttoncontent bgcolor={bgcolor} float={float} onClick={onClick}>
    <span className="icon">{children}</span>
  </Buttoncontent>
);

export default ButtonIcon;
