import { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { GoalsContext } from "../context/goals-context";

import GoalItem from "../components/GoalItem";

function TodoListScreen() {
  const { goals, addGoal } = useContext(GoalsContext);

  function startAddGoalHanlder() {
    addGoal("asd");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>할 일이 {goals.length}개 밖에 안남잖아?</Text>
        <Text style={styles.text}>완전 럭키비키잖앙🍀</Text>
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <GoalItem id={item.key} text={item.task} />}
        alwaysBounceVertical={false}
      />
      <View>
        <Button
          title={"새로운 할 일 추가하기!"}
          onPress={startAddGoalHanlder}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default TodoListScreen;
