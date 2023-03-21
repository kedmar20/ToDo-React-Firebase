import React from "react";
import PropTypes from "prop-types";
import TaskItem from "components/atoms/TaskItem/TaskItem";
import { TaskListWrapper } from "./TaskList.styles";

const TaskList = ({ tasks, deleteTask }) => {
   return (
      <>
         <TaskListWrapper>
            {tasks.map((task, i) => (
               <TaskItem key={i} task={task} deleteTask={deleteTask} i={i} />
            ))}
         </TaskListWrapper>
      </>
   );
};

// TaskList.PropTypes = {};

export default TaskList;
