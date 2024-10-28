import { StatusBar } from "expo-status-bar";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import GoalsContextProvider from "./context/goals-context";

import TodoListScreen from "./screens/TodoListScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <StatusBar style="dark" />
      <GoalsContextProvider>
        <SafeAreaView style={styles.container}>
          <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <TodoListScreen />
          </Animated.View>
        </SafeAreaView>
      </GoalsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({ ios: 0, android: 6 }),
    flex: 1,
    backgroundColor: "#F6FCDF",
  },
});
