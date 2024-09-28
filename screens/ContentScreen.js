import { View, Text, StyleSheet } from "react-native";

function ContentScreen() {
  return (
    <View style={styles.container}>
      <Text>할 일이 {1}개 남았어요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContentScreen;
