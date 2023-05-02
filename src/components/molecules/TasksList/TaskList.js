import React from "react";
import PropTypes from "prop-types";
import TaskItem from "components/atoms/TaskItem/TaskItem";
import { TaskListWrapper } from "./TaskList.styles";

const TaskList = ({ tasks, deleteTask }) => {
   return (
      <>
         <TaskListWrapper>
            {tasks.map((task) => (
               <TaskItem key={task.id} task={task.title} deleteTask={deleteTask} i={task.id} tasks={tasks} />
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
