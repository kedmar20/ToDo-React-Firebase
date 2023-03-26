import React, { useEffect } from "react";
import { useHandlers } from "hooks/useHandlers";
import MainView from "views/MainView/MainView";
import Input from "components/atoms/Input/Input";
import { Button } from "components/atoms/Button/Button";
import FormInput from "components/organisms/FormInput/FormInput";
import TaskList from "components/molecules/TasksList/TaskList";

let task;
let key;
let tasks;
export const handleEdit = (e, i, t) => {
   console.log(i);
   task = e;
   key = i;
   tasks = t;
};

const EditView = () => {
   const { handleDeleteTask, handleAddTask, tasksValues, handleChangeInputValue } = useHandlers();

   useEffect(() => {
      handleDeleteTask(key);
   }, []);

   console.log(key);
   console.log(tasks);
   console.log(tasks[key]);
   console.log(tasksValues);

   return (
      <>
         <TaskList tasks={tasks}>{task}</TaskList>
         {/* <Input onChange={handleChangeInputValue} value={tasksValues.inputValue} placeholder="schreibe hier neue Aufgabe..."></Input> */}
         <Input value={tasks[key]} placeholder="schreibe hier neue Aufgabe..."></Input>
         <Button type="submit">add new task</Button>
         <FormInput></FormInput>
      </>
   );
};

export default EditView;
