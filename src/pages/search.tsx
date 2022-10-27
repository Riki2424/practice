import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const InstitutionSearch = () => {
  const [setActive, setActiveState] = useState(false);
  const toggleAccordion = () => {
    setActiveState(!setActive ? true : false);
  };

  const SearchTitle = styled.h2`
    position: relative;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 14px;
    &::before {
      position: absolute;
      content: "";
      top: 5px;
      right: 11px;
      width: 7px;
      height: 7px;
      border-top: 1px solid #2e718b;
      border-right: 1px solid #2e718b;
      transform: rotate(-135deg);
      z-index: 100;
    }
    &::after {
      position: absolute;
      content: "";
      top: -3px;
      right: 3px;
      width: 8px;
      height: 8px;
      padding: 8px 10.5px 8px 9.5px;
      background: white;
      border-radius: 50%;
      box-shadow: 0px 3px 5px #17425d4d;
    }
  `;

  const SearchText = styled.h3`
    font-size: 16px;
    position: relative;
    padding-left: 4px;
    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      width: 1px;
      height: 14px;
      background: #2e718b;
    }
  `;

  const SearchList = styled.div`
    input {
      margin-top: 4px;
      margin-bottom: 16px;
      width: 288px;
      padding: 10px 0 9px 8px;
      border: 1px solid #c1c1c1;
      border-radius: 4px;
    }
    .search-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      margin-bottom: 16px;
    }
    button {
      font-size: 14px;
      color: white;
      padding: 6px 10px;
      background: transparent linear-gradient(90deg, #18a887 0%, #77c4b2 100%)
        0% 0% no-repeat padding-box;
      border-radius: 15px;
    }
  `;

  const AreaContainer = styled.div`
    .chk-box {
      input[type='checkbox'] {
        display: none;

        + label {
            font-size: 14px;
            margin-right: 16px;
            margin-bottom: 10px;
          padding: 5px 0px 5px 22px;
          line-height: 25px;
          position: relative;
          &::before {
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: 50%;
            left: 0px;
            box-sizing: border-box;
            border-radius: 50%;
            content: '';
            background: white;
            border: 1px solid #c1c1c1
            transform: translateY(-50%);
          }
          &::after {
            display: block;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 14px;
            left: 4px;
            box-sizing: border-box;
            opacity: 0;
            border-radius: 50%;
            content: '';
            background: #2e718b;
            transform: translateY(-50%) rotate(45deg);
            transition: opacity 0.5s ease;
          }
        }

        &:checked + label::after {
          opacity: 1;
        }
      }
    }
  `;

  const FeatureContainer = styled.div`
    .block {
      display: block;
    }
    .chk-box {
      input[type='checkbox'] {
        display: none;

        + label {
            font-size: 14px;
            margin-right: 16px;
            margin-bottom: 10px;
          padding: 5px 0px 5px 22px;
          line-height: 29px;
          position: relative;
          &::before {
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: 50%;
            left: 0px;
            box-sizing: border-box;
            content: '';
            background: white;
            border: 1px solid #c1c1c1
            transform: translateY(-50%);
          }
          &::after {
            content: '';
            position: absolute;
              border-bottom: 2px solid #2e718b;
              border-left: 2px solid #2e718b;
              opacity: 0;
              height: 6px;
              width: 14px;
              transform: rotate(-45deg);
              top: 10px;
              left: 2px;
              transition: opacity 0.5s ease;
          }
        }

        &:checked + label::after {
          opacity: 1;
        }
      }
    }
  `;
  const ButtonContainer = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Frame = styled.div`
    box-shadow: 0px 3px 10px #17425d1a;
    width: 400px;
    padding: 10px;
    background: white;
  `;

  const Frame2 = styled.div`
    position: relative;
    width: 40px;
    box-shadow: 0px 3px 10px #17425d1a;
    background: white;
    &::before {
      position: absolute;
      content: "";
      top: 6px;
      right: 15px;
      width: 7px;
      height: 7px;
      border-top: 1px solid #2e718b;
      border-right: 1px solid #2e718b;
      transform: rotate(45deg);
      z-index: 100;
    }
    &::after {
      position: absolute;
      content: "";
      top: -3px;
      right: 3px;
      width: 8px;
      height: 8px;
      padding: 8px 10.5px 8px 9.5px;
      background: white;
      border-radius: 50%;
      box-shadow: 0px 3px 5px #17425d4d;
    }
  `;
  const Container = styled.div`
    display: flex;
  `;
  return (
    <>
      <Container>
        <Frame2>
          <div onClick={toggleAccordion} className="toggle"></div>
        </Frame2>
        <Frame>
          <SearchTitle>絞り込み検索</SearchTitle>
          <SearchList>
            <SearchText>フリーワード</SearchText>
            <input placeholder="新宿" />
          </SearchList>
          <SearchList>
            <SearchText>エリア</SearchText>
            <AreaContainer>
              <div className="chk-box">
                <input type="checkbox" id="accept1" />
                <label htmlFor="accept1">北海道</label>
                <input type="checkbox" id="accept2" />
                <label htmlFor="accept2">東北</label>
                <input type="checkbox" id="accept3" />
                <label htmlFor="accept3">関東</label>
                <input type="checkbox" id="accept4" />
                <label htmlFor="accept4">中部</label>
                <input type="checkbox" id="accept5" />
                <label htmlFor="accept5">近畿</label>
                <input type="checkbox" id="accept6" />
                <label htmlFor="accept6">中国</label>
                <input type="checkbox" id="accept7" />
                <label htmlFor="accept7">四国</label>
                <input type="checkbox" id="accept8" />
                <label htmlFor="accept8">九州</label>
              </div>
            </AreaContainer>
          </SearchList>
          <SearchList>
            <FeatureContainer>
              <div className="chk-box">
                <div className="block">
                  <input type="checkbox" id="accept9" />
                  <label htmlFor="accept9">九州</label>
                  <input type="checkbox" id="accept01" />
                  <label htmlFor="accept01">九州</label>
                </div>
                <div className="block">
                  <input type="checkbox" id="accept02" />
                  <label htmlFor="accept02">九州</label>
                  <input type="checkbox" id="accept03" />
                  <label htmlFor="accept03">九州</label>
                  <input type="checkbox" id="accept04" />
                  <label htmlFor="accept04">九州</label>
                </div>
                <input type="checkbox" id="accept05" />
                <label htmlFor="accept05">九州</label>
                <input type="checkbox" id="accept06" />
                <label htmlFor="accept06">九州</label>
              </div>
            </FeatureContainer>
          </SearchList>
          <ButtonContainer>
            <button>入力</button>
          </ButtonContainer>
        </Frame>
      </Container>
    </>
  );
};
