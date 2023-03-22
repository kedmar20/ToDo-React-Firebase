import styled from "styled-components";
import { Button } from "../Button/Button";

export const TaskItemWrapper = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 35px;
   border-bottom: 1px solid ${({ theme }) => theme.colors.fonts1};
   padding: 15px 5px;
   /* list-style: square; */
   overflow-wrap: anywhere;

   ::before {
      content: "➠";
      font-size: 2rem;
      /* margin: auto; */
   }

   :first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.fonts1};
   }

   div {
      display: flex;
      align-items: center;

      ${Button} {
         font-size: 1rem;
         font-weight: 300;
         height: 35px;
         margin: 5px;
         padding: 3px 6px;
         width: 100px;
      }
   }
`;
