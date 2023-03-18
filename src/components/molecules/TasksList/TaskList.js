import React from "react";
import PropTypes from "prop-types";
import TaskItem from "components/atoms/TaskItem/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
   return (
      <ul>
         {tasks.map((task, i) => (
            <TaskItem key={i} task={task} deleteTask={deleteTask} i={i} />
         ))}
      </ul>
   );
};

// TaskList.PropTypes = {};

export default TaskList;
