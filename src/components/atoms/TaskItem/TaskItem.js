import React from "react";
import PropTypes from "prop-types";
import { TaskItemWrapper } from "./TaskItem.styles";
import { Button } from "../Button/Button";

const TaskItem = (props) => (
   <TaskItemWrapper>
      {props.task}
      <div>
         <Button onClick={() => props.deleteTask(props.i)}>DELETE</Button>
         <Button>EDIT</Button>
      </div>
      {/* {console.log(props.i)} */}
   </TaskItemWrapper>
);

// TaskItem.PropTypes = {};

export default TaskItem;
