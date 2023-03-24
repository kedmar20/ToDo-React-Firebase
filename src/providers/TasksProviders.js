import React, { useState } from "react";
// import PropTypes from 'prop-types';

export const TasksContext = React.createContext({
   tasks: [],
});

const TasksProviders = ({ children }) => {
   const [tasks, setTasks] = useState([]);
   ////NOW: są teraz jakby 2 staty 'tasks': tutaj i w useHandlers
   // spr tutaj consolelogiem co to pokazuje
   //
   return (
      <TasksContext.Provider
         value={{
            tasks,
         }}
      >
         {children}
      </TasksContext.Provider>
   );
};

// TasksProviders.PropTypes = {
// }

export default TasksProviders;
