import React from "react";
import PropTypes from "prop-types";
// import Input from "components/atoms/Input/Input";
import { FormInputWrapper } from "./FormInputWrapper.styles";

const FormInput = ({ handleAddTask, handleChangeInputValue, inputValue }) => {
   return (
      <FormInputWrapper onSubmit={handleAddTask}>
         {/* <div as="form"> */}
         <input onChange={handleChangeInputValue} value={inputValue} placeholder="schreibe hier neue Aufgabe..."></input>
         <button type="submit">add new task</button>
         {/* <input type="submit" value="add new task"></input> // beide funktioniert
          */}
         {/* <input type="submit" value="add new task" onClick={handleAddTask}></input> // das ist eine Alternative*/}
      </FormInputWrapper>
   );
};

// FormInput.PropTypes = {};

export default FormInput;
