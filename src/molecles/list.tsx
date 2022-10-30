import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const InstitutionResult: React.FC<StyleProps> = (props) => {
  const [active, setActive] = useState(false);
  const SlideClick = () => {
    setActive(!active);
  };
  return (
    <>
      <ContentsWrapper style={active ? OpenSlideProps : CloseSlideProps}>
        <div className="search-title">
          <h2>東急プラザ〇〇〇〇〇〇店</h2>
          <div className="back-btn" onClick={SlideClick}></div>
        </div>
        <div className="store-information">
          <h3>所在地</h3>
          <p>〒150-0001 東京都渋谷区神宮 前4-30-3</p>
        </div>
        <div className="store-information">
          <h3>規模</h3>
          <p>地上 12階・地下 2階</p>
        </div>
        <div className="store-information">
          <h3>アクセス</h3>
          <p>市営地下鉄南北線「勾当台公園 駅」徒歩1分</p>
        </div>
        <ButtonContainer>
          <button>編集画面</button>
        </ButtonContainer>
      </ContentsWrapper>
    </>
  );
};

const SlideProps: React.CSSProperties = {
  top: 0,
};

const OpenSlideProps = {
  ...SlideProps,
  transform: "translate(0vw, 0)",
};

const CloseSlideProps = {
  ...SlideProps,
  transform: "translate(-251px, 0)",
};
type StyleProps = {
  style?: any;
};
const ContentsWrapper = styled.div<StyleProps>`
  display: none;
  @media screen and (min-width: 768px) {
    style: ${(props) => (props?.style ? props.style : undefined)};
    z-index: 20;
    transition-duration: 0.2s;
    left: 320px;
    display: block;
    color: white;
    width: 250px;
    height: 469px;
    position: absolute;
    border-radius: 4px;
    background-color: #2e718b;
    box-shadow: 0px 3px 10px #17425d1a;
    padding: 20px 26px 0 16px;
    overflow-y: scroll;
  }
  img {
    width: 208px;
    height: 120px;
  }
  h2 {
    position: relative;
    margin-bottom: 16.06px;
    text-decoration: underline;
  }
  h3 {
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 6px;
  }
  .store-information {
    padding-bottom: 8.5px;
    border-bottom: 1px solid white;
    font-size: 14px;
    line-height: 19px;
  }
  .search-title {
    display: flex;
  }
  .back-btn {
    position: relative;
    width: 10px;
    height: 10px;
    top: -9px;
    right: -16px;
    cursor: pointer;
    &::before {
      position: absolute;
      right: 4px;
      top: 3px;
      content: "";
      border-top: 1px solid white;
      width: 15px;
      height: 10px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &::after {
      transform: translateX(10px);
      position: absolute;
      content: "";
      top: 3px;
      right: -2px;
      border-top: 1px solid white;
      width: 15px;
      height: 10px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }
`;
const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 16.44px;
    margin-bottom: 23px;
  }
`;
