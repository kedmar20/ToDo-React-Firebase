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

TaskList.propTypes = {
   tasks: PropTypes.arrayOf(PropTypes.any),
   deleteTask: PropTypes.func,
};

export default TaskList;
