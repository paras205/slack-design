import React from "react";

import Header from "../components/Header";
import HeaderActions from "../components/HeaderActions";
import Sidebar from "../components/Sidebar";

const Main = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <HeaderActions />
      <Sidebar />
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Main;
