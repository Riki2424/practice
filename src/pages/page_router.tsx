import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
export const PageRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={Page1} />
          <Route path={"/page2"} element={Page2} />
        </Routes>
      </Router>
    </>
  );
};
