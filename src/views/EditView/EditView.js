import React, { useState } from "react";
import Input from "components/atoms/Input/Input";
import { Button } from "components/atoms/Button/Button";
import { NavLink } from "react-router-dom";
import { useHandlers } from "hooks/useHandlers";
import { TaskItemWrapper } from "components/atoms/TaskItem/TaskItem.styles";
import { TaskListWrapper } from "components/molecules/TasksList/TaskList.styles";
import { FormInputWrapper } from "components/organisms/FormInput/FormInputWrapper.styles";
import MainView from "views/MainView/MainView";
import { TitleWrapper } from "components/atoms/Title/Title.styles";

const initialValues = {
   inputValue: "",
   tasks: [],
   editedTask: "",
   key: "",
};
export const handleEdit = (task, index, tasks) => {
   initialValues.editedTask = task;
   initialValues.key = index;
   // initialValues.tasks = tasks.filter((tasks, ind) => ind !== index);
   initialValues.tasks = tasks;
   console.log(task, index, tasks);
};

const EditView = () => {
   const [tasksValues, setTasksValues] = useState(initialValues);
   const { handleEditTask } = useHandlers();

   if (!tasksValues.editedTask.length) {
      return (
         <NavLink to="/">
            <MainView />
         </NavLink>
      );
   }

   return (
      <FormInputWrapper>
         <TitleWrapper>Bearbeiten Sie die Aufgabe:</TitleWrapper>
         <TaskListWrapper>
            {tasksValues.tasks.map((task) => {
               if (tasksValues.key === task.id) {
                  return (
                     <FormInputWrapper key={task.id}>
                        <Input
                           autoFocus={true}
                           value={tasksValues.editedTask}
                           onChange={(e) => setTasksValues({ ...tasksValues, editedTask: e.target.value })}
                           editView={tasksValues.editedTask.length}
                        ></Input>
                        <NavLink to="/">
                           <Button onClick={() => handleEditTask(tasksValues.editedTask, tasksValues.key)} editView={tasksValues.editedTask.length}>
                              Änderungen bestätigen
                           </Button>
                        </NavLink>
                     </FormInputWrapper>
                  );
               } else {
                  return <TaskItemWrapper key={task.id}>{task.title}</TaskItemWrapper>;
               }
            })}
         </TaskListWrapper>
      </FormInputWrapper>
   );
};

export default EditView;
