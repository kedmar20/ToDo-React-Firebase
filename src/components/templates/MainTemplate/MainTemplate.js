import React from "react";
import FormInput from "components/organisms/FormInput/FormInput";
import Title from "components/atoms/Title/Title";
import TaskList from "components/molecules/TasksList/TaskList";
import { useHandlers } from "hooks/useHandlers";
import { MainTemplateWrapper } from "./MainTemplate.styles";
import { TitleWrapper } from "components/atoms/Title/Title.styles";

const MainTemplate = () => {
   const { handleAddTask, tasksValues, handleChangeInputValue, handleDeleteTask } = useHandlers();
   return (
      <MainTemplateWrapper>
         <Title />
         <FormInput handleAddTask={handleAddTask} inputValue={tasksValues.inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!tasksValues.error ? <p>{tasksValues.error}</p> : ""}
         {!(tasksValues.tasks.length === 0) ? <h2>Aufgabenliste:</h2> : null}
         <TaskList tasks={tasksValues.tasks} deleteTask={handleDeleteTask} />
      </MainTemplateWrapper>
   );
};

export default MainTemplate;
