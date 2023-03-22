import styled from "styled-components";

const Input = styled.input`
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

   ::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font-size: 2vw;
      margin: auto;
   }
`;

export default Input;
