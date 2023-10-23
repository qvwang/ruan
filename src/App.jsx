import { Routes, Route } from "react-router-dom";

import UseUser from "@/pages/user";
import UseIm from "./pages/im";

import "./App.css";

// 路由入口
const UseApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UseIm />}></Route>
        <Route path="/user" element={<UseUser />}></Route>
      </Routes>
    </>
  );
};

export default UseApp;
