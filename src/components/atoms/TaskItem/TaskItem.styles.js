import styled from "styled-components";

export const TaskItemWrapper = styled.li`
   display: flex;
   justify-content: space-between;
   /* align-content: center; */
   gap: 15px;
   /* border-bottom: 1px solid ${({ theme }) => theme.colors.fonts1}; */
   padding: 8px 0;
   /* list-style: square; */

   ::before {
      content: "-";
      font-size: 2rem;
      /* margin: auto; */
   }

   :first-child {
      /* border-top: 1px solid ${({ theme }) => theme.colors.fonts1}; */
   }

   div {
      /* background-color: yellow; */
      display: flex;

      button {
         margin: 5px;
         padding: 3px;
      }
   }
`;
