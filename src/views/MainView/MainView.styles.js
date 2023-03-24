import styled from "styled-components";

export const MainViewWrapper = styled.div`
   align-items: center;
   background-color: ${({ theme }) => theme.colors.background1};
   color: ${({ theme }) => theme.colors.fonts1};
   display: flex;
   flex-direction: column;
   /* min-height: 100vh; */
   justify-content: center;
   padding: 50px 25px 50px 25px;

   p:nth-child(n) {
      font-size: 2rem;
      color: red;
      background-color: ${({ theme }) => theme.colors.white};
      border: 3px solid red;
      border-radius: 25px;
      margin-bottom: 3vh;
      padding: 0.5rem 1.5rem;
   }
`;
