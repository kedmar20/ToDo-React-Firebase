import React from "react";
import PropTypes from "prop-types";
import { TaskItemWrapper } from "./TaskItem.styles";

const TaskItem = (props) => (
   <TaskItemWrapper>
      {props.task}
      <div>
         <button onClick={() => props.deleteTask(props.i)}>DELETE</button>
         <button>EDIT</button>
      </div>
      {/* {console.log(props.i)} */}
   </TaskItemWrapper>
);

// TaskItem.PropTypes = {};

export default TaskItem;
