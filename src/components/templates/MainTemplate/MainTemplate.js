import React from "react";
import FormInput from "components/organisms/FormInput/FormInput";
import Title from "components/atoms/Title/Title";
import TaskList from "components/molecules/TasksList/TaskList";
import { useHandlers } from "hooks/useHandlers";
import { MainTemplateWrapper } from "./MainTemplate.styles";
import { TitleWrapper } from "components/atoms/Title/Title.styles";

const MainTemplate = () => {
   const { handleAddTask, inputValue, handleChangeInputValue, error, tasks, handleDeleteTask } = useHandlers();
   return (
      <MainTemplateWrapper>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!error ? <p>{error}</p> : ""}
         {!(tasks.length === 0) ? <h2>Aufgabenliste:</h2> : null}
         <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
      </MainTemplateWrapper>
   );
};

export default MainTemplate;
