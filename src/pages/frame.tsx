import React from "react";
import styled from "styled-components";

export interface contentsFrameProps {
  width?: string;
  padding?: string;
  margin?: string;
  border?: string;
  children?: string;
}

const ContentsWrapper = styled.div<contentsFrameProps>`
  width: ${(props) => props.width};
  border-radius: 4px;
  background-color: white
  box-shadow: 0px 3px 10px #17425d1a;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  
`;

export const ContentsFrame: React.FunctionComponent<contentsFrameProps> = (
  props
) => {
  return (
    <ContentsWrapper
      width={props.width}
      padding={props.padding}
      margin={props.margin}
      border={props.border}
    >
      {props.children}
    </ContentsWrapper>
  );
};
