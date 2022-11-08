import React from "react";
import styled from "styled-components";
type Props = {
  className?: string;
  onClick?: any;
  children?: any;
};
export const Cell: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <>
      <Wrapper onClick={onClick} className={className}>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border: 1px solid #c1c1c1;
  color: black;
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
`;
