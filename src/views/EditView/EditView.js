import React, { useEffect } from "react";
import { useHandlers } from "hooks/useHandlers";

let task;
let key;
let tasks;
export const handleEdit = (e, i, t) => {
   console.log(i);
   console.log(tasks);
   task = e;
   key = i;
   tasks = t;
};

const EditView = () => {
   const { handleDeleteTask, tasksValues } = useHandlers();
   useEffect(() => {
      handleDeleteTask(key);
   }, []);

   console.log(tasksValues);
   console.log(tasks); // tu jesteś !!! wyśweitla się PRAWIDŁOWO ILOŚĆ TASKÓW
   //TERAZ MUSISZ TUTAJ NOWĄ FUNKCJĘ DELETUJĄCO-FILTRUJĄCĄ ZROBIĆ I WYŚWIETLIĆ INPUT I
   //POTEM NOWĄ LISTĘ WYŚWIETLIĆ; EH KUPA ROBOTY JESZCZE

   return <div>{task}</div>;
};

export default EditView;
