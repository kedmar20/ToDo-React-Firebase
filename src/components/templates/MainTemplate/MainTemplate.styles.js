import styled from "styled-components";

export const MainTemplateWrapper = styled.div`
   align-items: center;
   background-color: ${({ theme }) => theme.colors.background1};
   color: ${({ theme }) => theme.colors.fonts1};
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   justify-content: center;
   padding: 50px 25px 50px 25px;

   h2 {
      font-size: 2.5rem;
      font-weight: 400;
      margin: 55px 0 20px 0;
   }
`;
