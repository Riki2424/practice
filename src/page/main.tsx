import React from "react";
import styled from "styled-components";
import { InstitutionResult } from "../molecles/list";
export const Main: React.FC = (props) => {
  return (
    <>
      <Wrapper>
        <div className="main-container">
          <p className="link-top">マイページTOP</p>
          <span className="link-text">施設選択</span>
          <div className="search">
            <InstitutionResult />
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246670.83842018424!2d139.7070482148228!3d35.67676200469398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1666757999769!5m2!1sja!2sjp"
                width="100%"
                height="100%"
              >
                s
              </iframe>
              <button className="on">OFF</button>
            </div>
          </div>
        </div>
        <div className="institution-sp">
          <div className="inner">
            <div className="top-link">
              <p>マイページTOP</p>
              <span>施設選択</span>
            </div>
            <input placeholder="新宿 東急プラザ" />
            <div className="search-container">
              <button>絞り込み検索</button>
              <span>一覧で表示</span>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246670.83842018424!2d139.7070482148228!3d35.67676200469398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1666757999769!5m2!1sja!2sjp"
              width="100%"
              height="500px"
            >
              s
            </iframe>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    }
    .search {
      position:relative;
      display: flex;
      width: 1046px;
      height: 468px;
      margin-bottom 27px;
    }
    .map {
      width: 100%;
      position: relative;
        .on {
          font-size: 20px;
          position: absolute;
          top: 100px;
          width: 70px;
          right: 200px;
          z-index:10;
          cursor: pointer;
        }
      }
    .main-container {
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
        margin-left: 10px;
      }
    }
    .link-top {
      position: relative;
      font-size: 12px;
      color: #2e718b;
      margin: 18px 0 12px 0;
      text-decoration: underline;
      display: inline-block;
      &::before {
        position: absolute;
        content: '';
        left: 88px;
        top: 1px;
        width: 7px;
        height: 7px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        transform: rotate(45deg);
      }
    }
      .link-text {
        color: black;
        margin-left: 20px;
        text-decoration: none;
        font-size: 12px;
    }
  .institution-sp {
    @media screen and (min-width: 768px) {
        display: none;
      }
    .inner {
      width: 343px;
      margin: 0 auto;
    }
    .top-link {
      font-size: 12px;
      margin-top: 8px;
      p {
        position: relative;
        color: #2e718b;
        margin-right: 20px;
        display: inline-block;
        &::after {
          position: absolute;
          content: '';
          border-top: 1px solid black;
          border-right: 1px solid black;
          width: 7px;
          height: 7px;
          transform: rotate(45deg);
          right: -12px;
          top: 1px;
        }
      }
      span {
        color: black;
      }
    }
    input {
      width: 100%;
      margin: 8px 0;
      font-size: 16px;
      background: white;
      border: 1px solid #c1c1c1;
      border-radius: 4px;
      padding: 10px 0 10px 30px;
      &:focus {
        border-color: #2e718b;
        box-shadow: 0px 3px 10px #2e718b1a;
      }
    }
    .search-container {
      margin-bottom 8px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        background: white;
        color: black;
        padding: 7px 8px 7px 26px;
        font-size: 14px;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
      }
      span {
        color: #2e718b;
        text-decoration: underline;
      }
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default Main;
