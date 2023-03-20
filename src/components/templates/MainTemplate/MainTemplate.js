import React, { useState, useReducer } from "react";
import FormInput from "components/organisms/FormInput/FormInput";
import Title from "components/atoms/Title/Title";
import TaskList from "components/molecules/TasksList/TaskList";

const initialValues = {
   inputValue: "",
   error: "",
   tasks: [],
};

const reducer = (state, action) => {
   switch (action.type) {
      case "INPUT CHANGE":
         return {
            ...state,
            inputValue: action.value,
         };
      case "THROW ERROR":
         return {
            ...state,
            error: action.text,
         };
      case "ADD TASKS":
         return {
            ...state,
            tasks: action.add,
         };
      case "FILTERED TASKS":
         return {
            ...state,
            tasks: action.tasksAfterDelete,
         };
      default:
         return state;
   }
};

const MainTemplate = () => {
   const [tasksValues, dispatch] = useReducer(reducer, initialValues);

   const handleChangeInputValue = (e) => {
      dispatch({
         type: "INPUT CHANGE",
         value: e.target.value,
      });
   };

   const handleAddTask = (e) => {
      tasksValues.error = "";
      e.preventDefault();
      !!tasksValues.tasks.some((e) => e === tasksValues.inputValue)
         ? dispatch({ type: "THROW ERROR", text: "Ein solcher Task existiert bereits. Task umbenennen, bitte!" })
         : (console.log("alles ok"),
           !!tasksValues.inputValue
              ? dispatch({
                   type: "ADD TASKS",
                   add: [...tasksValues.tasks, tasksValues.inputValue],
                })
              : dispatch({ type: "THROW ERROR", text: "Bitte geben Sie mindestens 2 Zeichen für Task ein!" }));

      tasksValues.inputValue = "";
   };

   const deleteTask = (key) => {
      dispatch({
         type: "FILTERED TASKS",
         tasksAfterDelete: tasksValues.tasks.filter((e, i) => i !== key),
      });
   };
   return (
      <>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={tasksValues.inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!tasksValues.error ? <p>{tasksValues.error}</p> : ""}
         <TaskList tasks={tasksValues.tasks} deleteTask={deleteTask} />
      </>
   );
};

export default MainTemplate;
