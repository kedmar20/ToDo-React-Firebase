import styled from "styled-components";

export const Button = styled.button`
   background-color: ${({ theme }) => theme.colors.button1};
   border: 2px solid ${({ theme }) => theme.colors.buttonOutline};
   border-radius: 3vw;
   color: ${({ theme }) => theme.colors.white};
   cursor: pointer;
   font-size: 1.25vw;
   font-weight: 200;
   height: ${(props) => (props.editView ? "6vw" : "4vw")};
   /* height: ${false ? "4vw" : "7vw"}; */
   padding: 1vw 1vw 1.2vw 1vw;
   transition: all 0.8s;
   width: 12vw;

   :hover {
      opacity: 0.5;
      scale: 95%;
   }
`;
