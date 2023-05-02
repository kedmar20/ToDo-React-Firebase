import React from "react";
import { TaskItemWrapper } from "./TaskItem.styles";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { handleEdit } from "views/EditView/EditView";

const TaskItem = (props) => {
   return (
      <TaskItemWrapper>
         {props.task}
         <div>
            <Button onClick={() => props.deleteTask(props.i)}>DELETE</Button>
            <NavLink to="/edit-view">
               <Button onClick={() => handleEdit(props.task, props.i, props.tasks)}>EDIT</Button>
            </NavLink>
         </div>
      </TaskItemWrapper>
   );
};

export default TaskItem;
