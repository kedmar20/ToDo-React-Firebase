import React from "react";
import Title from "components/atoms/Title/Title";
import { MainTemplateWrapper } from "./MainTemplate.styles";
//
//
const MainTemplate = ({ children }) => {
   return (
      <MainTemplateWrapper>
         <Title />
         {children}
      </MainTemplateWrapper>
   );
};

export default MainTemplate;
