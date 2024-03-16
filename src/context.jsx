import React, { useState, useEffect } from "react";


export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <>
      <AppContext.Provider value={{

        tasks,
        setTasks
      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   