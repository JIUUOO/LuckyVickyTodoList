import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

import IntroScreen from "./screens/IntroScreen";
import ContentScreen from "./screens/ContentScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {isLoading ? <IntroScreen /> : <ContentScreen />}
    </Animated.View>
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
