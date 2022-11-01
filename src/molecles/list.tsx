import React from "react";
import styled from "styled-components";
import ContentsFrame from "../atom/contens_flame";
import { useState } from "react";
// export const SearchList: React.FC<SlideTypeProps> = ({SlideMenu},props) => {
export const SearchList: React.FC<SlideTypeProps> = (props) => {
  // const SlideButton = () => {
  //   SlideMenu();
  // };
  return (
    <>
      <Wrapper style={props.style}>
        <div className="search-results">
          <p>
            検索結果<span>10</span>
            <p>件</p>
          </p>
          {/* <div className="back-btn" onClick={() => SlideButton()}>
            <span className="batu"></span>
          </div> */}
        </div>
        <div>
          <h2 className="store-title">東急プラザ〇〇〇〇〇〇店</h2>
          <div className="store-container">
            <div>
              <div className="store-information">
                <p>所在地&emsp;</p>
                <div className="store-text">
                  <span>
                    〒150-0001 東京都渋谷区神宮<span>前4-30-3</span>
                  </span>
                </div>
              </div>
              <div className="store-information">
                <p>規模&emsp;</p>
                <div className="store-text">
                  <span>地上 12階・地下 2階</span>
                </div>
              </div>
              <div className="store-information">
                <p>アクセス&emsp;</p>
                <div className="store-text">
                  <span>地上 12階・地下 2階</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export type SlideTypeProps = {
  style: any;
  SlideMenu?: any;
};
const SlideProps: React.CSSProperties = {
  top: 0,
  background: "#f2f2f2",
};

const SlideOpenProps = {
  ...SlideProps,
  transform: "translate(0, -59vw)",
};

const SlideCloseProps = {
  ...SlideProps,
  transform: "translate(0, -14vw)",
};

const Wrapper = styled.div<SlideTypeProps>`
  transition-duration: 0.4s;
  style: ${(props) => props.style}
  z-index:100;
  padding-bottom: 5px;
  .search-results {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 21px 17px 16px;
    background: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    &::before {
      border-radius: 13px;
      position: absolute;
      content: '';
      width: 32px;
      height: 4px;
      background: #c1c1c1;
      left: 47%;
      top: 8px;
    }
    p {
        display: inline-block;
        font-size: 12px;
    }
    span {
        font-size: 16px;
        margin: 0 2px;
    }
    .back-btn {
      position: relative;
      width: 14px;
      height: 14px;
      cursor: pointer;
      .batu {
        &::before {
          position: absolute;
          content: '';
          width: 1px;
          height: 19px;
          transform: rotate(45deg);
          background: black;
          top: -5px;
          }
        &::after {
          position: absolute;
          content: '';
          width: 1px;
          height: 19px;
          transform: rotate(-45deg);
          background: black;
          top: -5px;
        }
      }
    }
  }
  .store-title {
    font-size: 16px;
    color: #2e718b;
    margin-bottom: 24px;
    padding: 0 8px;
  }
  .store-container {
    width: 339px;
    margin:0 auto;
    display: flex;
    img {
      width: 90px;
      height: 54px;
      margin-right: 13px;
    }
    .store-information {
      display: flex;
      margin-bottom: 8px;
      p {
        font-size: 12px;
        font-weight: bold;
      }
      span {
        font-size: 12px;
        display: block;
      }
    }
  }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
const ButtonContainer = styled.div`
  text-align: center;
  button {
    margin-right: 8px;
  }
`;

export default SearchList;
