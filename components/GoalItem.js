import { View, Text, StyleSheet } from "react-native";

function GoalItem({ text }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 4,
    borderColor: "#ccc",
    borderTopWidth: 1,
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
