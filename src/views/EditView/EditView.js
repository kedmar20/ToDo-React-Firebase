import React, { useState } from "react";
import Input from "components/atoms/Input/Input";
import { Button } from "components/atoms/Button/Button";
import { NavLink } from "react-router-dom";
import { useHandlers } from "hooks/useHandlers";
import { TaskItemWrapper } from "components/atoms/TaskItem/TaskItem.styles";
import { TaskListWrapper } from "components/molecules/TasksList/TaskList.styles";
import { FormInputWrapper } from "components/organisms/FormInput/FormInputWrapper.styles";
import MainView from "views/MainView/MainView";

const initialValues = {
   inputValue: "",
   tasks: [],
   editedTask: "",
   key: "",
};
export const handleEdit = (task, index, tasks) => {
   initialValues.editedTask = task;
   initialValues.key = index;
   initialValues.tasks = tasks.filter((tasks, ind) => ind !== index);
};

const EditView = () => {
   const [tasksValues, setTasksValues] = useState(initialValues);
   const { handleEditTask } = useHandlers();

   if (tasksValues.tasks.length === 0) {
      return (
         <NavLink to="/">
            <MainView />
         </NavLink>
      );
   }

   return (
      <FormInputWrapper>
         <TaskListWrapper>
            {tasksValues.tasks.map((task, i) => {
               return <TaskItemWrapper key={i}>{task}</TaskItemWrapper>;
            })}
         </TaskListWrapper>
         <Input value={tasksValues.editedTask} onChange={(e) => setTasksValues({ ...tasksValues, editedTask: e.target.value })}></Input>
         <NavLink to="/">
            <Button onClick={() => handleEditTask(tasksValues.tasks, tasksValues.editedTask)}>Änderungen bestätigen</Button>
         </NavLink>
      </FormInputWrapper>
   );
};

export default EditView;
