import React from "react";
import PropTypes from "prop-types";
// import Input from "components/atoms/Input/Input";

const FormInput = ({ handleAddTask, handleChangeInputValue, inputValue }) => {
   return (
      <form onSubmit={handleAddTask}>
         {/* <div as="form"> */}
         <input onChange={handleChangeInputValue} value={inputValue}></input>
         <button type="submit">add new task</button>
         {/* <input type="submit" value="add new task" onClick={handleAddTask}></input> */}
      </form>
   );
};

// FormInput.PropTypes = {};

export default FormInput;
