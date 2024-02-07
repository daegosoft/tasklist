import react from "react";
import { useLocalStorage } from "./useLocalStorage";
const TaskContext = react.createContext();

function TaskProvider ({children}) {
    const {item: categorys} = useLocalStorage("CATEGORY","TASKCATEGORYS", [{text: "Personal"}]);
    const {item: tasks } = useLocalStorage("TASKS", "TASKLIST_V1", []);

    return (
        <TaskContext.Provider value={{categorys, tasks}}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };