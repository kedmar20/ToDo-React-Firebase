import React from "react";
import PropTypes from "prop-types";

const TaskItem = (props) => (
   <li>
      {props.task}
      <button onClick={() => props.deleteTask(props.i)}>X</button>
      {console.log(props.i)}
   </li>
);

// TaskItem.PropTypes = {};

export default TaskItem;
