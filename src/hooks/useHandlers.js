import { useReducer, useContext } from "react";
import { TasksContext } from "providers/TasksProviders";

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

export const useHandlers = () => {
   const context = useContext(TasksContext);
   const [tasksValues, dispatch] = useReducer(reducer, initialValues);
   let { inputValue, tasks } = tasksValues; //autorski pomysł destrukturyzacji tych dwóch zmiennych stanów w tym pliku

   const handleChangeInputValue = (e) => {
      dispatch({
         type: "INPUT CHANGE",
         value: e.target.value,
      });
   };

   const throwError = (messageError) => {
      dispatch({ type: "THROW ERROR", text: messageError });
   };

   const clearInputValue = () => {
      dispatch({
         type: "INPUT CHANGE",
         value: "",
      });
   };

   const handleAddTask = (e) => {
      throwError("");
      e.preventDefault();
      !!tasks.some((e) => e === inputValue)
         ? throwError("Ein solcher Task existiert bereits. Task umbenennen, bitte!")
         : !!inputValue
         ? dispatch({
              type: "ADD TASKS",
              add: [...tasks, inputValue],
           })
         : throwError("Bitte geben Sie mindestens 2 Zeichen für Task ein!");

      clearInputValue();
   };

   const handleDeleteTask = (key) => {
      dispatch({
         type: "FILTERED TASKS",
         tasksAfterDelete: tasks.filter((e, i) => i !== key),
      });
   };
   return {
      handleAddTask,
      handleChangeInputValue,
      handleDeleteTask,
      tasksValues,
   };
};
