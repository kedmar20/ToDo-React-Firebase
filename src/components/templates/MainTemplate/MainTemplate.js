import React, { useState } from "react";
import FormInput from "components/organisms/FormInput/FormInput";
import Title from "components/atoms/Title/Title";
import TaskList from "components/molecules/TasksList/TaskList";

const MainTemplate = () => {
   const [tasks, setTasks] = useState([]);
   const [inputValue, setInputValue] = useState("");
   const [errorValue, setErrorValue] = useState("");

   const handleChangeInputValue = (e) => {
      setInputValue(e.target.value);
   };
   const handleAddTask = (e) => {
      setErrorValue("");
      e.preventDefault();
      !!inputValue ? setTasks([...tasks, inputValue]) : setErrorValue("Wpisz co najmniej 2 znaki jako task!");
      setInputValue("");
   };

   const deleteTask = (key) => {
      setTasks(tasks.filter((e, i) => i !== key));
   };
   return (
      <>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!errorValue ? <p>{errorValue}</p> : ""}
         <TaskList tasks={tasks} deleteTask={deleteTask} />
      </>
   );
};

export default MainTemplate;
