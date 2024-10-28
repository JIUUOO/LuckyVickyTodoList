import { createContext, useState } from "react";

export const GoalsContext = createContext({
  goals: [],
  addGoal: (id) => {},
});

function GoalsContextProvider({ children }) {
  const [goalItem, setGoalItem] = useState([]);

  function addGoal(item) {
    setGoalItem((currentGoals) => [...currentGoals, item]);
  }

  const value = {
    goals: goalItem,
    addGoal: addGoal,
  };

  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
}

export default GoalsContextProvider;
