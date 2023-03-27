import React from "react";
import PropTypes from "prop-types";
import FormInput from "components/organisms/FormInput/FormInput";
import TaskList from "components/molecules/TasksList/TaskList";
import { useHandlers } from "hooks/useHandlers";
import { MainViewWrapper } from "./MainView.styles";
import { TitleWrapper } from "components/atoms/Title/Title.styles";

const MainView = () => {
   const { handleAddTask, tasksValues, handleChangeInputValue, handleDeleteTask } = useHandlers();

   return (
      <MainViewWrapper>
         <TitleWrapper>Deine Aufgaben für Heute:</TitleWrapper>
         <FormInput handleAddTask={handleAddTask} inputValue={tasksValues.inputValue} handleChangeInputValue={handleChangeInputValue} />
         {!!tasksValues.error ? <p>{tasksValues.error}</p> : ""}
         {!(tasksValues.tasks.length === 0) ? <h2>Aufgabenliste:</h2> : null}
         <TaskList tasks={tasksValues.tasks} deleteTask={handleDeleteTask} />
      </MainViewWrapper>
   );
};

MainView.propTypes = {
   handleAddTask: PropTypes.func,
   tasksValues: PropTypes.string,
   handleChangeInputValue: PropTypes.func,
   handleDeleteTask: PropTypes.func,
};

export default MainView;
