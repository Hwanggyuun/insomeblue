import React from "react";
import InsomeNavigate from "./main-top/InsomeNavigate";
import MainContent from "./main-middletop/maincontent";
import MainBlueContent from "./main-middlebottom/mainbluecontent";

const Main: React.FC = () => {
  return (
    <>
      <InsomeNavigate />
      <MainContent />
      <MainBlueContent />
    </>
  );
};

export default Main;
