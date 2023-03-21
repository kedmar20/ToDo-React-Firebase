import React from "react";
import FormInput from "components/organisms/FormInput/FormInput";
import Title from "components/atoms/Title/Title";
import TaskList from "components/molecules/TasksList/TaskList";
import { useHandlers } from "hooks/useHandlers";

const MainTemplate = () => {
   const { handleAddTask, inputValue, handleChangeInputValue, error, tasks, handleDeleteTask } = useHandlers();
   return (
      <>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!error ? <p>{error}</p> : ""}
         <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
      </>
   );
};

export default MainTemplate;
