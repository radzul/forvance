import React from 'react';
import styled from 'styled-components/macro';

const ActionItem = (props: any) => {
  const { icon, children } = props;
  return (
    <ActionItemWrap>
      <ActionItemContent>
        {children}
      </ActionItemContent>
    </ActionItemWrap>
  );
};

const ActionItemWrap = styled.li`
  list-style: none;
`;

const ActionItemContent = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  color: #868e96;
  &:hover {
    .button {
      color: #e9ecef;
    }
`;


export default ActionItem;
