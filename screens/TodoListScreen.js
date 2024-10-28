import { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { GoalsContext } from "../context/goals-context";

import GoalItem from "../components/GoalItem";

function TodoListScreen() {
  const { goals, addGoal } = useContext(GoalsContext);

  function addGoalHanlder() {
    addGoal({
      id: goals.length,
      content: "",
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>할 일이 {goals.length}개 밖에 안남잖아?</Text>
        <Text style={styles.text}>완전 럭키비키잖앙🍀</Text>
      </View>
      <FlatList
        data={goals}
        renderItem={({ item }) => <GoalItem id={item.id} />}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
      <View style={{ alignItems: "flex-start" }}>
        <Button title={"새로 할 일이얌!"} onPress={addGoalHanlder}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    paddingLeft: 16,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default TodoListScreen;
