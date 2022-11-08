import React from "react";
import styled from "styled-components";
import { Cell } from "./components/cell";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/esm/fp/endOfMonth/index.js";
import { addMonths, subMonths, format } from "date-fns";
import differenceInDays from "date-fns/differenceInDays";
import { TaskPopup } from "./components/task_popup";
import { useState } from "react";
type Props = {
  value?: Date;
  onChange?: any;
  onClick?: any;
};
export const Calendar: React.FC<Props> = ({
  value = new Date(),
  onChange,
  onClick,
}) => {
  const [active, setActive] = useState(false);
  const activeMenu = () => {
    setActive(!active);
  };
  const weeks = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();
  const prevMonth = () => {
    onChange(subMonths(value, 1));
  };
  const nextMonth = () => {
    onChange(addMonths(value, 1));
    console.log(nextMonth);
  };
  return (
    <>
      <Wrapper>
        <div className="flame">
          <div className="calendar-top">
            <div className="calendar-task">
              <button onClick={activeMenu} className="calendar-button button1">
                予定を追加
              </button>
              <button className="calendar-button button2">帳簿出力</button>
            </div>
            <div className="calendar-change">
              <button className="change-button">今日</button>
              <button className="change-button">日</button>
              <button className="change-button">週</button>
              <button className="change-button">月</button>
            </div>
          </div>
          <p className="full-year">
            <span onClick={prevMonth}>＜</span>
            <span className="year">{format(value, "yyyy")}</span>
            <span onClick={nextMonth}>＞</span>
          </p>
          <ul className="flex">
            {weeks.map((week) => (
              <li key={week}>{week}</li>
            ))}
          </ul>
          <TaskPopup
            activeMenu={activeMenu}
            style={active ? { opacity: "1" } : { opacity: "0" }}
          />
          <div className="calendar">
            {Array.from({ length: prefixDays }).map((_, index) => (
              <Cell key={index} />
            ))}
            {Array.from({ length: numDays }).map((_, index: any) => {
              const date = index + 1;
              return <Cell key={date}>{date}</Cell>;
            })}
            {Array.from({ length: suffixDays }).map((_, index) => (
              <Cell key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
margin-top: 20px;
margin-bottom: 32px;
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 146px;
    position-relative;
  }
  .flame {
    padding: 16px;
    width: 1080px;
    margin: 0 auto;
    background: white;
    box-shadow: 0px 3px 10px #2e718b1a;
    border-radius: 15px;
  }
  .calendar-top {
    display: flex;
    justify-content: space-between;
  }
  .flex {
    display: flex;
    color: #2e718b;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8.5px;
    li {
      margin-right: 95px;
    }
  }
  .calendar-button {
    position: relative;
    background: #18a887;
    border-radius: 15px;
    color: white;
    padding: 6px 10px 6px 24px;
    &:hover {
      opacity: 0.6;
    }
    &::before {
      position: absolute;
      content: '';
      border-top: 1px solid white;
      width: 11px;
      height: 1px;
      top: 11px;
      left: 8px;
    }
    &::after {
      position: absolute;
      content: '';
      border-left: 1px solid white;
      width: 1px;
      height: 10px;
      top: 7px;
      left: 13px;
    }
  }
  .year {
    position: relative;
    font-size: 20px;
    color: #2e718b;
    font-weight: bold;
    text-align: center;
  }
  .full-year {
    margin-top: 14px;
    margin-bottom: 24px;
    text-align: center;
    span {
      color: #2e718b;
    }
  }
  .next {
    width: 13px;
    height: 13px;
    top: 3px;
    right: 444px;
    border-top: 2px solid #2e718b;
    border-right: 2px solid #2e718b;
    transform: rotate(45deg);
  }
  .button1 {
    margin-right: 14px;
  }
  .change-button {
    color: black;
    font-size: 14px;
    padding: 6px 16px;
    background: white;
    box-shadow: 0px 3px 10px #2e718b1a;
  }
`;
