import { useReducer, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "config/firebase";

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
   const [tasksValues, dispatch] = useReducer(reducer, initialValues);
   let { inputValue, tasks } = tasksValues;
   console.log(tasks);

   const getTasksList = async () => {
      const taskss = await getDocs(collection(db, "todos"));
      let datas = [];
      taskss.forEach((task) => {
         datas.push({
            ...task.data(),
            id: task.id,
         });
      });
      dispatch({
         type: "ADD TASKS",
         add: [...datas],
      });
   };

   useEffect(() => {
      getTasksList();
   }, []);

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

   const handleAddTask = async (e) => {
      throwError("");
      e.preventDefault();
      !!tasks.some((e) => e === inputValue)
         ? /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
           throwError("Ein solcher Task existiert bereits. Task umbenennen, bitte!")
         : !!inputValue
         ? /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
           (await addDoc(collection(db, "todos"), {
              title: inputValue,
           }),
           getTasksList())
         : throwError("Bitte geben Sie mindestens 2 Zeichen für Task ein!");

      clearInputValue();
   };
   // const handleAddTask = (e) => {
   //    throwError("");
   //    e.preventDefault();
   //    !!tasks.some((e) => e === inputValue)
   //       ? throwError("Ein solcher Task existiert bereits. Task umbenennen, bitte!")
   //       : !!inputValue
   //       ? dispatch({
   //            type: "ADD TASKS",
   //            add: [...tasks, inputValue],
   //         })
   //       : throwError("Bitte geben Sie mindestens 2 Zeichen für Task ein!");

   //    clearInputValue();
   // };

   const handleDeleteTask = async (id) => {
      console.log(id);
      const taskToDelete = doc(db, "todos", id);
      await deleteDoc(taskToDelete);
      getTasksList();
   };
   // const deleteMovie = async (id) => {
   //    const movieDoc = doc(db, "movies", id);
   //    await deleteDoc(movieDoc);
   // };
   // const handleDeleteTask = (key) => {
   //    dispatch({
   //       type: "FILTERED TASKS",
   //       tasksAfterDelete: tasks.filter((e, i) => i !== key),
   //    });
   // };

   const handleEditTask = (tasksList, task, key) => {
      // tasksList.preventDefault();
      // dispatch({
      //    type: "ADD TASKS",
      //    add: [...tasks, "fsfsddfsdfs"],
      // });
      // initialValues.tasks = [...tasksList, task];
      initialValues.tasks = [...tasksList];
      initialValues.tasks[key] = task;
   };

   // useEffect(() => {
   //    const getTasksList = async () => {
   //       const tasks = await getDocs(collection(db, "todos"));
   //       tasks.forEach((task) => {
   //          console.log(task.id, "=>", task.data());
   //       });
   //    };
   //    getTasksList();
   // }, []);

   return {
      handleAddTask,
      handleChangeInputValue,
      handleDeleteTask,
      tasksValues,
      handleEditTask,
   };
};
