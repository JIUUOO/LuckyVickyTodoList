import { createContext, useState } from "react";

export const GoalsContext = createContext({
  goals: [],
  addGoal: (item) => {},
  modifyGoal: (id, content) => {},
});

function GoalsContextProvider({ children }) {
  const [goalItem, setGoalItem] = useState([]);

  function addGoal(item) {
    setGoalItem((currentGoals) => [...currentGoals, item]);
  }

  function modifyGoal(id, content) {
    const goals = goalItem;
    goals.map((goal) => id === goal.id && (goal.content = content));
    setGoalItem(goals);
  }

  const value = {
    goals: goalItem,
    addGoal: addGoal,
    modifyGoal: modifyGoal,
  };

  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
}

export default GoalsContextProvider;
