import React, { useReducer } from "react";
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
      case "CLEAR ERROR":
         return { error: action.text };
      default:
         return state;
   }
};

const MainTemplate = () => {
   const [tasksValues, dispatch] = useReducer(reducer, initialValues);
   let { inputValue, tasks, error } = tasksValues;

   const handleChangeInputValue = (e) => {
      dispatch({
         type: "INPUT CHANGE",
         value: e.target.value,
      });
   };

   const handleAddTask = (e) => {
      // error = "";
      dispatch({ type: "THROW ERROR", text: "" });
      e.preventDefault();
      !!tasks.some((e) => e === inputValue)
         ? dispatch({ type: "THROW ERROR", text: "Ein solcher Task existiert bereits. Task umbenennen, bitte!" })
         : (console.log("alles ok"),
           !!inputValue
              ? dispatch({
                   type: "ADD TASKS",
                   add: [...tasks, inputValue],
                })
              : dispatch({ type: "THROW ERROR", text: "Bitte geben Sie mindestens 2 Zeichen für Task ein!" }));

      // inputValue = "";
      dispatch({ type: "INPUT CHANGE", value: "" });
   };

   const deleteTask = (key) => {
      dispatch({
         type: "FILTERED TASKS",
         tasksAfterDelete: tasks.filter((e, i) => i !== key),
      });
   };
   return (
      <>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!error ? <p>{error}</p> : ""}
         <TaskList tasks={tasks} deleteTask={deleteTask} />
      </>
   );
};

export default MainTemplate;
