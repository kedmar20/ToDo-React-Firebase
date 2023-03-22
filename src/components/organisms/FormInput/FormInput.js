import React from "react";
import PropTypes from "prop-types";
// import Input from "components/atoms/Input/Input";
import { FormInputWrapper } from "./FormInputWrapper.styles";
import { Button } from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";

const FormInput = ({ handleAddTask, handleChangeInputValue, inputValue }) => {
   return (
      <FormInputWrapper onSubmit={handleAddTask}>
         {/* <div as="form"> */}
         <Input onChange={handleChangeInputValue} value={inputValue} placeholder="schreibe hier neue Aufgabe..."></Input>
         <Button type="submit">add new task</Button>
         {/* <input type="submit" value="add new task"></input> // beide funktioniert
          */}
         {/* <input type="submit" value="add new task" onClick={handleAddTask}></input> // das ist eine Alternative*/}
      </FormInputWrapper>
   );
};

// FormInput.PropTypes = {};

export default FormInput;
