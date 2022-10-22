import { PageRouter } from "./page_router";
import Styled from "styled-components";
export const Page1 = () => {
  const Button = Styled.button`
    border: 1px solid black;
    color: black;
  `;
  return (
    <>
      <Button>ボタン</Button>
    </>
  );
};
