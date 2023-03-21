import styled from "styled-components";

export const FormInputWrapper = styled.form`
   align-items: center;
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: center;
   margin-bottom: 20px;

   input {
      /* appearance: none; */
      border: none;
      border-radius: 1rem;
      flex: 1 1 0%;
      font-size: 2vw;
      font-weight: 200;
      height: 60px;
      max-width: 80vw;
      outline: none;
      padding: 1rem 2rem 1rem 2rem;
      width: 40vw;
   }
   input::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font-size: 2vw;
      margin: auto;
   }

   button {
      background-color: ${({ theme }) => theme.colors.button1};
      border: 2px solid ${({ theme }) => theme.colors.buttonOutline};
      border-radius: 3vw;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      font-size: 1.25vw;
      font-weight: 200;
      height: 4vw;
      padding: 1vw 1vw 1.2vw 1vw;
      transition: all 0.8s;
      width: 12vw;
   }
   button:hover {
      opacity: 0.5;
      scale: 95%;
   }
`;
