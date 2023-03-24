import React from 'react';
// import PropTypes from 'prop-types';

export const TasksContext = React.createContext({
tasks: [];
})

const TasksProviders = ({children}) => {
const [tasks, setTasks] = useTasks([]);

return(

<TasksContext.Provider
    value={{
    tasks,
    }}
>
    {children}
</TasksContext.Provider>
}

// TasksProviders.PropTypes = {
// }

export default TasksProviders