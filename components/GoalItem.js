import { View, StyleSheet, TextInput } from "react-native";
import { GoalsContext } from "../context/goals-context";
import { useContext, useEffect, useState } from "react";

function GoalItem({ id }) {
  const { goals, modifyGoal } = useContext(GoalsContext);
  const [textValue, setTextValue] = useState("");

  function goalModifyHandler(enteredText) {
    setTextValue(enteredText);
    modifyGoal(id, enteredText);
  }

  useEffect(() => {
    const goal = goals.find((goal) => goal.id === id);
    if (goal) {
      setTextValue(goal.content);
    }
  }, [goals]);

  return (
    <View key={id} style={styles.wrap}>
      <TextInput
        style={styles.text}
        onChangeText={goalModifyHandler}
        value={textValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 3,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    padding: 8,
    color: "black",
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default GoalItem;
