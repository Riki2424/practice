import React from "react";
import styled from "styled-components";
import ContentsFrame from "../../../atom/contens_flame";
import { useState } from "react";
type ActiveProps = {
  style?: any;
  activeMenu?: any;
};
export const TaskPopup: React.FC<ActiveProps> = ({ activeMenu, style }) => {
  const [titleValue, setTitleValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [textValue, setTextValue] = useState("");
  console.log(titleValue);
  console.log(textValue);
  return (
    <>
      <Wrapper style={style}>
        <div className="flames">
          <div className="top-border">
            <div onClick={activeMenu} className="back-btn">
              <span className="back1"></span>
              <span className="back2"></span>
            </div>
          </div>
          <div className="inner">
            <input
              onChange={(e) => setTitleValue(e.target.value)}
              className="task-title"
              placeholder="タスクタイトル"
            />
            <ul className="task-check-list">
              <li className="task-list icons">
                <input
                  onChange={(e) => setDateValue(e.target.value)}
                  className="time-check time-right"
                  placeholder="10月07日"
                />
                <span>～</span>
                <input
                  onChange={(e) => setDateValue(e.target.value)}
                  className="time-check"
                  placeholder="10月07日"
                />
              </li>
              <li className="task-list icons">
                <input
                  onChange={(e) => setTimeValue(e.target.value)}
                  className="time-check right"
                  placeholder="0:00"
                />
                <span>～</span>
                <input
                  onChange={(e) => setTimeValue(e.target.value)}
                  className="time-check"
                  placeholder="0:00"
                />
              </li>
              <li className="task-list">
                <input
                  onChange={(e) => setLocationValue(e.target.value)}
                  className="location-check"
                  placeholder="場所"
                />
              </li>
              <li className="task-list">
                <input
                  onChange={(e) => setTextValue(e.target.value)}
                  className="location-check"
                  placeholder="説明"
                />
              </li>
            </ul>
            <p>{titleValue}</p>
            <ButtonContainer>
              <button className="save-btn">保存</button>
            </ButtonContainer>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
.flames {
    border-radius: 4px;
  box-shadow: 0px 3px 10px #17425d1a;
  width: 400px;
  background: white;
}
    top: 300px;
    position: absolute;
    transition-duration: 0.4s;
    z-index: 100;
    left: 308px;
  .top-border {
      position:relative;
      padding: 12px 0;
      background: #2e718b;
    }
    .back-btn {
        cursor:pointer;
        position: absolute;
        width: 24px;
        top: 3px;
        right: 3px;
        height: 18px;
    
    .back1 {
        border-top: 1px solid white;
    transform: rotate(45deg);
    width: 14px;
    top: 8px;
    right: 3px;
    position: absolute;
    height: 1px;
    }
    .back2 {
        border-top: 1px solid white;
    transform: rotate(-45deg);
    width: 14px;
    top: 8px;
    right: 3px;
    position: absolute;
    height: 1px;
    }
  }
  .inner {
    padding: 0 20px;
  }
  label {
  }
  .task-title {
    margin-top: 20px;
    padding-top: 18px;
    padding-bottom: 4.5px;
    color: #c1c1c1;
    font-size: 20px;
    border-bottom: 2px solid #2e718b;
  }
  .task-check-list {
    padding: 0;
    display: block;
    img {
        margin-right: 21px;
    }
  }
  .task-list {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
}
.right {
  }
  .time-right {
  }
  .time-check {
    position: relative;
    width: 150px;
    font-size: 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid #c1c1c1;
    color:black;
  }
  .location-check {
    font-size: 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid #c1c1c1;
    width: 100%;
    color:black;
  }
  .img {
    width: 16px;
  }
  .icons {
    position:relative;
    
  }
    .check-text {
    color: black;
    font-size: 14px;
    margin: 10px 0 16px 0;
    input[type='checkbox'] {
        display: none;
        + label {
          position: relative;
          font-size: 14px;
          margin-right: 27px;
          margin-bottom: 10px;
          padding: 5px 0px 5px 22px;
          line-height: 25px;
          &::before {
            position: absolute;
            content: '';
            width: 18px;
            height: 18px;
            top: 50%;
            left: 0px;
            background: white;
            border: 1px solid #c1c1c1;
            transform: translateY(-50%);
          }
          &::after {
            position: absolute;
            content: '';
            display: block;
            width: 6px;
            height: 15px;
            top: 13px;
            left: 6px;
            opacity: 0;
            border-right: 2px solid #2e718b;
            border-bottom: 2px solid #2e718b;
            transform: translateY(-50%) rotate(45deg);
            transition: opacity 0.5s ease;
          }
        }
        &:checked + label::after {
          opacity: 1;
        }
      }
    }
  }
`;
const ButtonContainer = styled.div`
  text-align: right;
  .save-btn {
    font-size: 16px;
    padding: 10px 16px;
    color: white;
    background: transparent linear-gradient(90deg, #2e718b 0%, #5199b5 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #17425d33;
    &:hover {
      background: transparent linear-gradient(90deg, #17425d 0%, #2e718b 100%)
        0% 0% no-repeat padding-box;
    }
  }
`;
